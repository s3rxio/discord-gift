import React, {useState} from 'react';
import clsx from "clsx";
import styles from "./Home.module.scss";
import sectionStyles from "../../components/UI/Section/Section.module.scss";
import {
    Button,
    Container,
    ContainerHeader,
    Heading,
    Input,
    Label,
    Section,
    Text
} from "../../components/UI";
import Alert from "../../components/Alert/Alert";

const Home = () => {
    const [username, setUsername] = useState("");
    const [videoId, setVideoId] = useState("");
    const giftUrl = `${process.env.REACT_APP_URL}/gifts/${videoId}?username=${username}`;

    const [showAlert, setShowAlert] = useState(false);
    return (
        <Section className={styles.home}>
            <Alert showAlert={showAlert} setShowAlert={setShowAlert} delay={3000} message="Copied to clipboard!" />
            <Container className={styles.home__container}>
                <ContainerHeader className={clsx(styles.home__container__header, sectionStyles.section__spacing_bottom)}>
                    <Heading size="small">
                        Joke Gift Generator
                    </Heading>
                    <Text color="muted">
                        Create your own joke gift and share it with your friends!
                    </Text>
                </ContainerHeader>

                <Label className={clsx(styles.home__label)}>
                    Username
                </Label>
                <Input type="text" className={styles.home__input} placeholder="Wumpus" maxLength={32} value={username} onChange={ev => setUsername(ev.target.value)} />

                <Label className={clsx(styles.home__label)}>
                    Youtube Video ID
                </Label>

                <Input type="text" className={styles.home__input} placeholder="dQw4w9WgXcQ" maxLength={11} value={videoId} onChange={ev => setVideoId(ev.target.value)} />

                <Button href="#" className={sectionStyles.section__spacing_top} onClick={() => {navigator.clipboard.writeText(giftUrl).then(() => setShowAlert(true))}}>
                    {giftUrl}
                </Button>
            </Container>
        </Section>
    );
};

export default Home;