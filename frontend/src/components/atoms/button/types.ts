import { ButtonSize, ButtonType, ButtonStyle } from "@app-types/common/types";

export interface ButtonProps {
    size?: ButtonSize,
    type: ButtonType,
    style?: ButtonStyle,
    disabled?: boolean,
    text: string,
    link?: string,
    onClick?: () => void;
}

export interface ButtonStyledProps {
    $size?: ButtonSize,
    $style?: ButtonStyle,
    $disabled?: boolean,
  }