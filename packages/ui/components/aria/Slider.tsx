/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import type {
  SliderOutputProps as AriaSliderOutputProps,
  SliderProps as AriaSliderProps,
  SliderThumbProps as AriaSliderThumbProps,
  SliderTrackProps as AriaSliderTrackProps,
  SlotProps,
} from "react-aria-components";
import {
  Slider as AriaSlider,
  SliderOutput as AriaSliderOutput,
  SliderThumb as AriaSliderThumb,
  SliderTrack as AriaSliderTrack,
} from "react-aria-components";

import { themed } from "../../tokens/theme";
import { Label } from "./Label";

export interface SliderProps<T> extends AriaSliderProps<T> {
  label?: string;
  thumbLabels?: string[];
}

export function Slider<T extends number | number[]>({ label, thumbLabels, ...props }: SliderProps<T>) {
  return (
    <AriaSlider css={styles.slider} {...props}>
      {label && <Label>{label}</Label>}
      <SliderOutput>{({ state }) => state.values.map((_, i) => state.getThumbValueLabel(i)).join(" – ")}</SliderOutput>
      <SliderTrack css={styles.track}>
        {({ state }) =>
          state.values.map((_, i) => <SliderThumb css={styles.thumb} key={i} index={i} aria-label={thumbLabels?.[i]} />)
        }
      </SliderTrack>
    </AriaSlider>
  );
}

export interface SliderOutputProps extends AriaSliderOutputProps, SlotProps {
  //
}

export const SliderOutput = (props: SliderOutputProps) => {
  return <AriaSliderOutput slot="output" css={styles.output} {...props} />;
};

export interface SliderTrackProps extends AriaSliderTrackProps, SlotProps {
  //
}

export const SliderTrack = (props: SliderTrackProps) => {
  return <AriaSliderTrack css={styles.track} slot="track" {...props} />;
};

export interface SliderThumbProps extends AriaSliderThumbProps, SlotProps {
  //
}

export const SliderThumb = (props: SliderThumbProps) => {
  return <AriaSliderThumb css={styles.thumb} slot="thumb" {...props} />;
};

const styles = {
  slider: css({
    display: "grid",
    gridTemplateAreas: '"label output"\n                       "track track"',
    gridTemplateColumns: "1fr auto",
    maxWidth: "300px",
    color: themed("--text-colour"),
    "&[data-orientation=horizontal]": {
      flexDirection: "column",
      width: "300px",
      "[slot=track]": {
        height: "30px",
        width: "100%",
        "&:before": {
          height: "3px",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
        },
        "> div": {
          top: "50%",
        },
      },
    },
    "&[data-orientation=vertical]": {
      height: "150px",
      display: "block",
      "[slot=label], [slot=output]": {
        display: "none",
      },
      "[slot=track]": {
        width: "30px",
        height: "100%",
        "&:before": {
          width: "3px",
          height: "100%",
          left: "50%",
          transform: "translateX(-50%)",
        },
        "> div": {
          left: "50%",
        },
      },
    },
    "&[data-disabled]": {
      "[slot=track]:before": {
        background: themed("--border-colour-disabled"),
      },
      "[slot=track] > div": {
        background: themed("--border-colour-disabled"),
      },
    },
  }),
  label: css({
    gridArea: "label",
  }),
  output: css({
    gridArea: "output",
  }),
  track: css({
    gridArea: "track",
    position: "relative",
    "&:before": {
      content: "''",
      display: "block",
      position: "absolute",
      background: themed("--border-colour"),
    },
  }),
  thumb: css({
    width: "1.429rem",
    height: "1.429rem",
    borderRadius: "50%",
    background: themed("--highlight-bg-selected"),
    border: `2px solid ${themed("--background-colour-secondary")}`,
    forcedColorAdjust: "none",
    "&[data-dragging]": {
      background: themed("--highlight-bg-selected-pressed"),
    },
    "&[data-focus-visible]": {
      outline: `2px solid ${themed("--focus-ring-colour")}`,
    },
  }),
};
