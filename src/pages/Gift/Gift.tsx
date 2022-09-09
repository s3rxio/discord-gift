import React from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import styles from "./Gift.module.scss";
import sectionStyles from "../../components/UI/Section/Section.module.scss";
import {
    Button,
    Container,
    ContainerHeader,
    Heading,
    Section,
    Text
} from "../../components/UI";
import NitroIcon from "../../components/NitroIcon/NitroIcon";

const Gift = () => {
    const params = useParams();
    const [searchParams] = useSearchParams();

    const {videoId} = params;
    const username = searchParams.get("username");

    if(!videoId || !username || videoId.length !== 11 || username.length > 32)
        return (
            <Section>
                <Container>
                    <ContainerHeader>
                        <Heading size="small">Invalid gift</Heading>
                        <Text color="muted" align="center">Sorry, this gift is invalid.</Text>
                    </ContainerHeader>
                </Container>
            </Section>
        );

    return (
        <Section>
            <Container>
                <ContainerHeader>
                    <Text color="muted" wrap="anywhere">
                        {username} gifted you
                    </Text>

                    <div className={styles.gift__box}>
                        <NitroIcon width="40px" height="40px"/>
                        <Heading size="small">
                            Nitro for 1 month
                        </Heading>
                    </div>
                </ContainerHeader>

                <Button className={sectionStyles.section__spacing_top} href={`https://youtu.be/${videoId}`}>
                    Woo! Accept Gift
                </Button>
            </Container>
        </Section>
    );
};

export default Gift;