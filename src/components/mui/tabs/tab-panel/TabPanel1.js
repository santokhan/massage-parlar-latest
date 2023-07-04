import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/shiatsu.jpg" />
      </Col>
      <Col>
        <Box>
          <Title>Shiatsu massage</Title>
          <List>
            <Item>
              De extra dikke katoenen Shiatsu mat vormt zich heerlijk naar uw
              lichaam en bied comfort bij een krachtige of subtiele behandeling.
            </Item>
            <Item>
              Shiatsu massage is een Japanse vorm van herstellend lichaamswerk.
              Het is een zeer effectieve vorm van behandeling bij chronische
              aandoeningen en RSI opbouw. Shiatsu of ook wel acupressuur,
              balanceerd de energiestromen van de meridianen. De helende werking
              gaat uit van de Shiatsu masseur die zijn gewicht verplaatst op het
              ademhalingsritme van de cliënt. Bij een verstoorde balans zijn er
              punten op het lichaam verzwakt of gespannen. Shiatsu wordt
              letterlijk vertaald als “vinger druk”. Het maakt gebruik van
              drukken, kloppen, kneden, schudden, strekken en kalmeren. Shiatsu
              wordt uitgevoerd zonder olie en over de kleding heen.
            </Item>
            <Item>
              Kies Shiatsu Massages voor preventie van RSI, angsten, slaap
              problemen en het verhelpen van onrust in het lijf, tennis
              elleboog, golf arm, en ter versterking van imuunsysteem en
              welbehagen.
            </Item>
          </List>
          <DetailsLink to="/meer-over-shiatsu-massages">
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
