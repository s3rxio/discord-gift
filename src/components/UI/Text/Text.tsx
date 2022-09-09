import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./Text.module.scss";
import {TextProps} from "../../../interfaces";
const Text: FC<TextProps> = (props) => {
    const rootStyles = clsx(styles.text, styles[`text_${props.color}`], styles[`text_${props.wrap}`], styles[`text_${props.align}`]);

    return <p className={clsx(rootStyles, props.className)}>{props.children}</p>;
};

export default Text;