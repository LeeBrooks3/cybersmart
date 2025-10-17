import type { Meta } from "@storybook/react";

import { Button } from "../../components/aria/Button";
import type { DialogProps } from "../../components/aria/Dialog";
import { Dialog, DialogTrigger } from "../../components/aria/Dialog";
import { Heading } from "../../components/aria/Heading";
import { Modal } from "../../components/aria/Modal";
import { TextField } from "../../components/aria/TextField";

const meta: Meta<typeof Dialog> = {
  component: Dialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: DialogProps) => (
  <DialogTrigger>
    <Button>Sign up…</Button>
    <Modal>
      <Dialog {...args}>
        <form>
          <Heading slot="title">Sign up</Heading>
          <TextField autoFocus label={"First Name"} />
          <TextField label={"Last Name"} />
          <Button slot="close" style={{ marginTop: 8 }}>
            Submit
          </Button>
        </form>
      </Dialog>
    </Modal>
  </DialogTrigger>
);
