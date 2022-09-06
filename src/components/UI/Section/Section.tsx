import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./Section.module.scss";
import {BaseElementProps} from "../../../interfaces";

const Section: FC<BaseElementProps> = (props) => {
    const rootStyles = styles.section;
    return <section {...props} className={clsx(rootStyles, props.className)}>{props.children}</section>;
};

export default Section;