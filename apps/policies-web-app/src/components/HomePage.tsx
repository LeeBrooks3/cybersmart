import { Form } from "@leebrooks3/ui/components/aria/Form";
import { Heading1 } from "@leebrooks3/ui/components/Typography";

import { Page, PageHeader } from "~/components/Page";

export function HomePage() {
  return (
    <Page>
      <PageHeader container={"xl"}>
        <Heading1>Hello, world!</Heading1>
      </PageHeader>

      <Form></Form>
    </Page>
  );
}
