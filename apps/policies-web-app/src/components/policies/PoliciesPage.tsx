import type { Policy } from "@leebrooks3/effect/schemas/policy";
import { Button } from "@leebrooks3/ui/components/aria/Button";
import { Dialog, DialogTrigger } from "@leebrooks3/ui/components/aria/Dialog";
import { Modal } from "@leebrooks3/ui/components/aria/Modal";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@leebrooks3/ui/components/aria/Table";
import { Text } from "@leebrooks3/ui/components/aria/Text";
import { Icon } from "@leebrooks3/ui/components/icons/Icon";
import { Flex } from "@leebrooks3/ui/components/layout/Flex";
import { Heading1 } from "@leebrooks3/ui/components/Typography";
import { Edit, Plus, Trash } from "@leebrooks3/ui/icons";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Effect } from "effect";
import { Suspense } from "react";

import { Page, PageHeader } from "~/components/Page";
import { PolicyForm } from "~/components/policies/PolicyForm";
import { clientRuntime } from "~/effect/client-runtime";
import { PoliciesApiService } from "~/effect/services/policies-api-service";

const getPoliciesEffect = () =>
  Effect.gen(function* () {
    const policiesApi = yield* PoliciesApiService;

    return yield* policiesApi.getPolicies();
  });

const deletePolicyEffect = (policy: Policy) =>
  Effect.gen(function* () {
    const policiesApi = yield* PoliciesApiService;

    return yield* policiesApi.deletePolicy(policy);
  });

export function PoliciesPage() {
  const policiesQuery = useQuery({
    queryFn: () => clientRuntime.runPromise(getPoliciesEffect()),
    queryKey: ["policies"],
    throwOnError: true,
  });

  const deletePolicyMutation = useMutation({
    mutationFn: (policy: Policy) => clientRuntime.runPromise(deletePolicyEffect(policy)),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      return policiesQuery.refetch();
    },
  });

  return (
    <Page>
      <PageHeader container={"xl"} flex={{ direction: "row", justifyContent: "space-between" }}>
        <Heading1>Policies</Heading1>

        <DialogTrigger>
          <Button colourScheme={"primary"}>
            Create Policy
            <Icon icon={Plus} />
          </Button>
          <Modal>
            <Dialog>
              <PolicyForm />
            </Dialog>
          </Modal>
        </DialogTrigger>
      </PageHeader>

      <Flex container={"xl"} padding flex={{ direction: "column" }}>
        <Suspense>
          <Table>
            <TableHeader>
              <TableColumn isRowHeader>
                <Text>Name</Text>
              </TableColumn>
              <TableColumn>
                <Text>Description</Text>
              </TableColumn>
              <TableColumn>
                <Text>Action</Text>
              </TableColumn>
            </TableHeader>
            <TableBody>
              {policiesQuery.data?.map((policy) => (
                <TableRow key={policy.policyId}>
                  <TableCell>
                    <Text>{policy.name}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{policy.description}</Text>
                  </TableCell>
                  <TableCell>
                    <DialogTrigger>
                      <Button variant={"ghost"}>
                        <Icon icon={Edit} />
                      </Button>
                      <Modal>
                        <Dialog>
                          <PolicyForm policy={policy} />
                        </Dialog>
                      </Modal>
                    </DialogTrigger>
                    <Button variant={"ghost"} onClick={() => deletePolicyMutation.mutate(policy)}>
                      <Icon icon={Trash} />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Suspense>
      </Flex>
    </Page>
  );
}
