import { makeId } from "@leebrooks3/effect/schemas/id";
import type { Policy } from "@leebrooks3/effect/schemas/policy";
import { Button } from "@leebrooks3/ui/components/aria/Button";
import {
  Fieldset,
  Form,
  FormHeader,
  FormSection,
  FormSectionHeader,
  FormSectionTitle,
  FormTitle,
} from "@leebrooks3/ui/components/aria/Form";
import { TextField } from "@leebrooks3/ui/components/aria/TextField";
import { Icon } from "@leebrooks3/ui/components/icons/Icon";
import { ChevronRight } from "@leebrooks3/ui/icons";
import { useForm } from "@tanstack/react-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import { Effect, Schema } from "effect";

import { clientRuntime } from "~/effect/client-runtime";
import { PoliciesApiService } from "~/effect/services/policies-api-service";

const createPolicyEffect = (formData: FormData) =>
  Effect.gen(function* () {
    const policiesApi = yield* PoliciesApiService;

    return yield* policiesApi.createPolicy({
      policyId: makeId(),
      ...formData,
    });
  });

const updatePolicyEffect = (policy: Policy) =>
  Effect.gen(function* () {
    const policiesApi = yield* PoliciesApiService;

    return yield* policiesApi.updatePolicy(policy);
  });

const formSchema = Schema.Struct({
  name: Schema.String.pipe(Schema.minLength(1, { message: () => "Policy name is required" })),
  description: Schema.String,
});

type FormData = typeof formSchema.Type;

const formSchemaValidator = Schema.standardSchemaV1(formSchema);

export function PolicyForm({ policy }: { policy?: Policy }) {
  const navigate = useNavigate();

  const savePolicyMutation = useMutation({
    mutationFn: (data: FormData) =>
      clientRuntime.runPromise(
        policy
          ? updatePolicyEffect({
              policyId: policy?.policyId,
              ...data,
            })
          : createPolicyEffect(data),
      ),
    onError: (error) => {
      console.error(error);
    },
    onSuccess: () => {
      return navigate({
        to: "/policies",
        reloadDocument: true,
      });
    },
  });

  const form = useForm({
    defaultValues: {
      name: policy?.name ?? "",
      description: policy?.description ?? "",
    },
    onSubmit: async ({ value }) => {
      await savePolicyMutation.mutateAsync(value);
    },
    validators: {
      onChange: formSchemaValidator,
    },
  });

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        e.stopPropagation();

        await form.handleSubmit(e);
      }}
    >
      <FormHeader>
        <FormTitle>{policy ? "Update" : "Create"} Policy</FormTitle>
      </FormHeader>

      <FormSection>
        <FormSectionHeader>
          <FormSectionTitle>Details</FormSectionTitle>
        </FormSectionHeader>
        <Fieldset>
          <form.Field name={"name"}>
            {(field) => (
              <TextField
                label={"Name"}
                name={field.name}
                value={field.state.value}
                onChange={field.handleChange}
                onBlur={field.handleBlur}
                isInvalid={field.state.meta.isDirty && !field.state.meta.isValid}
                errorMessage={field.state.meta.errors.at(0)?.message}
              />
            )}
          </form.Field>

          <form.Field name={"description"}>
            {(field) => (
              <TextField
                label={"Description"}
                name={field.name}
                value={field.state.value}
                onChange={field.handleChange}
                onBlur={field.handleBlur}
                errorMessage={field.state.meta.errors.at(0)?.message}
              />
            )}
          </form.Field>
        </Fieldset>
      </FormSection>

      <FormSection flex={{ justifyContent: "flex-end" }}>
        <form.Subscribe>
          {({ isFormValid }) => (
            <Button colourScheme={"primary"} type={"submit"} isDisabled={!isFormValid}>
              Save Policy
              <Icon icon={ChevronRight} />
            </Button>
          )}
        </form.Subscribe>
      </FormSection>
    </Form>
  );
}
