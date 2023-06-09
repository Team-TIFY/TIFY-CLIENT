/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export interface SpacingProps {
  width?: 16 | 24;
  height?: 4 | 8 | 12 | 16 | 20 | 24 | 32 | 48 | 64;
  variant?: "default" | "scroll" | "side";
}

export const Spacing = ({
  width = 16,
  height = 24,
  variant = "default",
  ...props
}: SpacingProps) => {
  return (
    <div
      css={css`
        width: ${
          variant === "default" ? "100%" : variant === "side" ? `${width}px` : "100%"
        };
        height: ${
          variant === "default" ? `${height}px` : variant === "scroll" ? "48px" : "100%"
        };
      `}
    ></div>
  );
};