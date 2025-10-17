/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type { ComponentProps } from "react";
import type { FormProps as AriaFormProps } from "react-aria-components";
import { Form as AriaForm } from "react-aria-components";

import { spacing } from "../../tokens/spacing";
import { themed } from "../../tokens/theme";
import type { HasContainerProp } from "../../utils/container";
import { containerStyles } from "../../utils/container";
import type { HasFlexProp } from "../../utils/flex";
import { flexStyles } from "../../utils/flex";
import type { HasPaddingProp } from "../../utils/padding";
import type { SectionProps } from "../layout/Section";
import { Section } from "../layout/Section";
import type { Heading3Props } from "../Typography";
import { Heading3, Heading4 } from "../Typography";
import type { HeaderProps } from "./Header";
import { Header } from "./Header";

export interface FormProps extends AriaFormProps, HasContainerProp, HasFlexProp, HasPaddingProp {
  //
}

export function Form({ container, flex, ...props }: FormProps) {
  return <AriaForm css={[styles.form, containerStyles(container), flexStyles(flex)]} {...props} />;
}

interface FormHeaderProps extends HeaderProps, HasContainerProp, HasFlexProp, HasPaddingProp {
  //
}

export const FormHeader = ({ ...props }: FormHeaderProps) => {
  return <Header css={styles.header} {...props} />;
};

interface FormTitleProps extends Heading3Props {
  //
}

export const FormTitle = ({ ...props }: FormTitleProps) => {
  return <Heading3 css={styles.title} {...props} />;
};

interface FormSectionProps extends SectionProps {
  //
}

export const FormSection = ({ ...props }: FormSectionProps) => {
  return <Section css={styles.section} {...props} />;
};

interface FormSectionHeaderProps extends HeaderProps {
  //
}

export const FormSectionHeader = ({ ...props }: FormSectionHeaderProps) => {
  return <Header css={styles.sectionHeader} {...props} />;
};

interface FormSectionTitleProps extends Heading3Props {
  //
}

export const FormSectionTitle = ({ ...props }: FormSectionTitleProps) => {
  return <Heading4 css={styles.sectionTitle} {...props} />;
};

export interface FieldsetProps extends ComponentProps<"fieldset"> {
  //
}

export const Fieldset = ({ ...props }: FieldsetProps) => {
  return <fieldset css={styles.fieldset} {...props} />;
};

const styles = {
  form: css({
    display: "flex",
    flexDirection: "column",
    gap: spacing.m,

    "[role=alert]": {
      border: `2px solid ${themed("--invalid-colour")}`,
      background: themed("--overlay-background"),
      borderRadius: "6px",
      padding: "12px",
      maxWidth: "250px",
      outline: "none",
      "&:focus-visible": {
        outline: `2px solid ${themed("--focus-ring-colour")}`,
        outlineOffset: "2px",
      },
    },
  }),
  header: css({
    padding: `${spacing.s} ${spacing.m}`,
  }),
  title: css({
    //
  }),
  section: css({
    display: "flex",
    flexDirection: "row",
    gap: spacing.m,
  }),
  sectionHeader: css({
    display: "flex",
    maxWidth: "16rem",
    position: "relative",
    width: "50%",
  }),
  sectionTitle: css({
    //
  }),
  fieldset: css({
    border: "unset",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: spacing.m,
    margin: "unset",
    padding: "unset",
  }),
};
