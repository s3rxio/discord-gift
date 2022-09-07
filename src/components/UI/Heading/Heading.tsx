import React, {FC} from "react";
import clsx from "clsx";
import styles from "./Heading.module.scss";
import {HeadingProps} from "../../../interfaces";

const Heading: FC<HeadingProps> = (props) => {
    const rootStyles = clsx(styles.heading, styles[`heading_${props.size}`]);
    return <div className={clsx(rootStyles, props.className)}>{props.children}</div>;
};

export default Heading;