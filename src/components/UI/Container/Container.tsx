import React, {FC} from "react";
import clsx from "clsx";
import styles from "./Container.module.scss";
import {BaseElementProps} from "../../../interfaces";

const Container: FC<BaseElementProps> = (props) => {
    const rootStyles = clsx(styles.container);
    return <div {...props} className={clsx(rootStyles, props.className)}>{props.children}</div>;
};

export default Container;