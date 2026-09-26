import { ButtonSize, ButtonType } from "@app-types/types";

export interface ButtonProps {
    size?: ButtonSize,
    type: ButtonType,
    text: string,
    link?: string,
    onClick?: () => void;
}

export interface ButtonStyledProps {
    $size?: ButtonSize,
  }