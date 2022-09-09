import React, {FC} from 'react';
import clsx from "clsx";
import styles from "./Alert.module.scss";
import {AlertProps} from "../../interfaces";
import {Container, Text} from "../UI";

const Alert: FC<AlertProps> = (props) => {
    const {showAlert, setShowAlert } = props;

    if(showAlert)
        setTimeout(() => setShowAlert(false), props.delay);

    const rootStyles = clsx(styles.alert, !showAlert && styles.alert_hidden)
    return (
        <Container className={rootStyles}>
            <Text color="default" className={styles.alert__message}>
                {props.message}
            </Text>
        </Container>
    );
};

export default Alert;