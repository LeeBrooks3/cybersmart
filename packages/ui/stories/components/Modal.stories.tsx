import type { Meta } from "@storybook/react";
import type { ModalOverlayProps } from "react-aria-components";

import { Button } from "../../components/aria/Button";
import { Dialog, DialogTrigger } from "../../components/aria/Dialog";
import { Heading } from "../../components/aria/Heading";
import { Modal } from "../../components/aria/Modal";
import { TextField } from "../../components/aria/TextField";

const meta: Meta<typeof Modal> = {
  component: Modal,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Example = (args: ModalOverlayProps) => (
  <DialogTrigger>
    <Button>Sign up…</Button>
    <Modal {...args}>
      <Dialog>
        <form>
          <Heading slot="title">Sign up</Heading>
          <TextField autoFocus label="First Name" />
          <TextField label="Last Name" />
          <Button slot="close">Submit</Button>
        </form>
      </Dialog>
    </Modal>
  </DialogTrigger>
);
