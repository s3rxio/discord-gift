import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./ContainerHeader.module.scss";
import {BaseElementProps} from "../../../interfaces";

const ContainerHeader: FC<BaseElementProps> = (props) => {
    const rootStyles = clsx(styles.container__header);
    return <div className={clsx(rootStyles, props.className)}>{props.children}</div>;
};

export default ContainerHeader;