import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./Alert.module.scss";
import {AlertProps} from "../../interfaces";
import {Text} from "../UI";

const Alert: FC<AlertProps> = (props) => {
    const {showAlert, setShowAlert } = props;

    if(showAlert)
        setTimeout(() => setShowAlert(false), props.delay);

    const rootStyles = clsx(styles.alert, !showAlert && styles.alert_hidden)
    return (
        <div className={rootStyles}>
            <Text color="default" className={styles.alert__message}>
                {props.message}
            </Text>
        </div>
    );
};

export default Alert;