import React from 'react';
import Container from "../../components/UI/Container/Container";
import styles from "./Home.module.scss";

const Home = () => {
    return (
        <section className={styles.home}>
            <Container className={styles.home__container}>
                Home
            </Container>
        </section>
    );
};

export default Home;