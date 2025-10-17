/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ModalOverlayProps as AriaModalOverlayProps } from "react-aria-components";
import { Modal as AriaModal, ModalOverlay as AriaModalOverlay } from "react-aria-components";

import { border } from "../../tokens/border";
import { deviceWidths } from "../../tokens/devices";
import { themed } from "../../tokens/theme";

interface ModalOverlayProps extends AriaModalOverlayProps {
  //
}

export function ModalOverlay(props: ModalOverlayProps) {
  return <AriaModalOverlay css={styles.overlay} {...props} />;
}

interface ModalProps extends ModalOverlayProps {
  container?: keyof typeof deviceWidths;
}

export function Modal({ container = "xs", ...props }: ModalProps) {
  return (
    <ModalOverlay>
      <AriaModal css={styles.modal({ container })} {...props} />
    </ModalOverlay>
  );
}

const styles = {
  overlay: css({
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "var(--visual-viewport-height)",
    background: "rgba(0 0 0 / .5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,

    "&[data-entering]": {
      animation: "modal-fade 200ms",
    },
    "&[data-exiting]": {
      animation: "modal-fade 150ms reverse ease-in",
    },

    "@keyframes modal-fade": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
    "@keyframes modal-zoom": {
      from: {
        transform: "scale(0.8)",
      },
      to: {
        transform: "scale(1)",
      },
    },
  }),
  modal: ({ container }: Pick<ModalProps, "container">) =>
    css({
      borderRadius: border.radius.m,
      background: themed("--overlay-background"),
      color: themed("--text-colour"),
      border: `1px solid ${themed("--border-colour")}`,
      outline: "none",
      maxWidth: container ? deviceWidths[container] : undefined,
      width: container ? "100%" : undefined,

      "&[data-entering]": {
        animation: "modal-zoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
      "@keyframes modal-slide": {
        from: {
          transform: "translateX(100%)",
        },
        to: {
          transform: "translateX(0)",
        },
      },
    }),
};
