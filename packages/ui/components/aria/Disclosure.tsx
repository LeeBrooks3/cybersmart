/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import type {
  DisclosurePanelProps as AriaDisclosurePanelProps,
  DisclosureProps as AriaDisclosureProps,
} from "react-aria-components";
import { Disclosure as AriaDisclosure, DisclosurePanel as AriaDisclosurePanel } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { Icon } from "../icons/Icon";
import { Button } from "./Button";
import { Header } from "./Header";

export interface DisclosureProps extends Omit<AriaDisclosureProps, "children"> {
  title?: ReactNode;
  header?: ReactNode;
  children?: ReactNode;
}

export function Disclosure({ title, header, children, ...props }: DisclosureProps) {
  return (
    <AriaDisclosure css={styles.disclosure} {...props}>
      <Header css={styles.header}>
        <Button css={styles.button} slot="trigger" variant={"ghost"}>
          <Icon icon={ChevronRight} />
          {title}
        </Button>
        {header}
      </Header>
      <DisclosurePanel>{children}</DisclosurePanel>
    </AriaDisclosure>
  );
}

export interface DisclosurePanelProps extends AriaDisclosurePanelProps {
  //
}

export const DisclosurePanel = (props: DisclosurePanelProps) => {
  return <AriaDisclosurePanel css={styles.panel} {...props} />;
};

const styles = {
  disclosure: css({
    "&[data-expanded] > header > [slot=trigger] > svg": {
      rotate: "90deg",
    },
  }),
  header: css({
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: spacing.s,
  }),
  button: css({
    padding: spacing.xs,

    "> svg": {
      transition: "rotate 200ms",
    },
  }),
  panel: css({
    marginLeft: "2rem",
  }),
};
