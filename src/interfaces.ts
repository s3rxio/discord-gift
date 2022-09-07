import {
    ChangeEventHandler,
    CSSProperties,
    Dispatch,
    HTMLAttributes,
    HTMLInputTypeAttribute,
    MouseEventHandler,
    ReactNode,
    SetStateAction
} from "react";

interface BaseElementProps {
    id?: string;
    className?: string;
    style?: CSSProperties;

    children?: ReactNode;
}

interface HeadingProps extends BaseElementProps {
    size: "large" | "medium" | "small";
}

interface TextProps extends BaseElementProps {
    color: "default" | "muted";
}

interface InputProps extends BaseElementProps {
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    value?: string | readonly string[] | number;

    onChange?: ChangeEventHandler<HTMLInputElement>;
}

interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
    for?: string;
}

interface ButtonProps extends BaseElementProps {
    href?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

interface NitroIconProps extends BaseElementProps {
    width?: string;
    height?: string;
}

interface AlertProps extends BaseElementProps {
    showAlert: boolean;
    setShowAlert: Dispatch<SetStateAction<boolean>>;

    delay: number;
    message: string;
}

export type {
    AlertProps,
    BaseElementProps,
    ButtonProps,
    HeadingProps,
    InputProps,
    LabelProps,
    NitroIconProps,
    TextProps
}