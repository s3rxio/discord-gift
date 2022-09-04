import React, {FC, HTMLAttributes} from "react";
import styles from "./Container.module.scss";
import {ContainerProps} from "../../../interfaces";

const Container: FC<ContainerProps> = (props) => {
    return (
        <div className={`${styles.container} ${props.className ? props.className : ""}`}>
            {props.children}
        </div>
    );
};

export default Container;