import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./Input.module.scss";
import {InputProps} from "../../../interfaces";

const Input: FC<InputProps> = (props) => {
    const rootStyles = clsx(styles.input, styles[`input__${props.type}`]);
    return <input {...props} className={clsx(rootStyles, props.className)}/>;
};

export default Input;