import { Link } from "react-router-dom";

import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/chair.jpg" />
      </Col>
      <Col>
        <Box>
          {/* Chair massage */}
          <Title>Stoelmassage</Title>
          <List>
            <Item>
              Even uw hoofd voorover te rusten leggen in een Massagestoel
              kussen, uw armen laten hangen, zucht…even echt loslaten…
            </Item>
            <Item>
              De meest laagdrempelige massagevorm is de stoelmassage. Hij kan
              overal naar toe en zit fantastisch. Met drukpuntmassage worden uw
              bovenlijf, hoofd, nek en schouders, handen en armen snel in
              ontspanning terug gebracht. De masseur kan overal goed bij terwijl
              u de rust van de zitpositie ervaart.
            </Item>
            <Item>
              Stoelmassage is ook zeer geschikt als bedrijfsmassage en word net
              als Shiatsu over de kleding heen gegeven. Deze effectieve
              onderbreking onder werktijden, zorgt ervoor dat er vitaliteit
              gewonnen word en is altijd ook in het voordeel van de werkgever.
              Wanneer de nek gespannen raakt van het turen naar een beeldscherm,
              trekt men vaak onbewust de schouders op met merkbare gevolgen aan
              het eind van de dag.
            </Item>
            <Item>
              Er wordt gebruik gemaakt van drukken, wrijven, rekken, schudden,
              kloppen, kneden en meer.
            </Item>
            <Item>
              Kies voor een Stoelmassage als kado voor uw werknemers, wanneer u
              vooral rug nek en schouder spanningen wilt verhelpen, voor
              verbeterde alertheid en overzicht, bij RSI klachten, muisarm,
              tennis elleboog etc.
            </Item>
            <Item>
              Stoelmassage is ook zeer geschikt als{" "}
              <Link
                to="/bedrijfsmassage"
                className="hover:underline text-green-800"
              >
                bedrijfsmassage
              </Link>
              .
            </Item>
          </List>
          <DetailsLink
            to="/meer-over-stoelmassage-massages"
            className="hover:underline text-green-800"
          >
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
