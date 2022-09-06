import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./Label.module.scss"
import {LabelProps} from "../../../interfaces";

const Label: FC<LabelProps> = (props) => {
    const rootStyles = styles.label;
    return <label className={clsx(rootStyles, props.className)}>{props.children}</label>;
};

export default Label;