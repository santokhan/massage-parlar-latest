import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col order={2}>
        <Image src="/images/tabs/Klankopbuik.jpg" />
      </Col>
      <Col order={1}>
        <Box>
          <Title>Klankschaal massage</Title>
          <List>
            <Item>
              De subtiele tonen van de kleine schaaltjes resoneren samen als een
              orkest van zachte klanken. Geniet van de wervelende trillingen en
              dompel u onder in een klankbad...
            </Item>
            <Item>
              Klankschaal massage moet u ervaren om de impact op het bewustzijn
              te weten. Het stamt af van oude culturen en is een type heilzame
              therapie die gedurende meer dan 5000 jaar wijd en zijd gebruikt
              wordt in India. De klankschaal massage is gebaseerd op de oude
              wijsheid dat geluid een krachtig effect heeft op het menselijk
              lichaam.
            </Item>
          </List>
          <DetailsLink
            to="/meer-over-klankschaal-massages"
            className="hover:underline text-green-800"
          >
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
