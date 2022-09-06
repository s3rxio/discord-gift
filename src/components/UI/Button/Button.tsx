import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./Button.module.scss";
import {ButtonProps} from "../../../interfaces";

const Button: FC<ButtonProps> = (props) => {
    const rootStyles = styles.button;
    return <a {...props} className={clsx(rootStyles, props.className)}>{props.children}</a>;
};

export default Button;