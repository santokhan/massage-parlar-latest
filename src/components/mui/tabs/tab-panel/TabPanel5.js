import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/sport.jpg" />
      </Col>
      <Col>
        <Box>
          <Title>Sportmassage</Title>
          <List>
            <Item>
              Sport massage is doorgaans een deelmassage maar kan ook als
              stevige massage toegepast worden op het gehele lichaam
            </Item>
            <Item>
              Sport massage is niet alleen voor sporters. Ook voor niet-sporters
              is een stevige sportmassage prettig bij vastzittende spieren. Het
              is een snelle en effectieve manier om diepere spierlagen aan een
              betere doorbloeding te helpen.
            </Item>
            <Item>
              Een goede sportmasseur voelt de spanningen in uw lichaam en past
              de behandeling hierop aan. Een sportmassage kan worden ingezet bij
              pijnlijke spieren of spanningsklachten en werkt mobiliserend en
              activerend. Wanneer verzuring aanwezig is na een sportprestatie
              zal de afvoer van melkzuur uit de spieren middels Sportmassage
              eerst erg gevoelig kunnen zijn. Door een vakkundige dosering van
              druk, kan een goede sportmasseur die pijngrens bij de client
              bewaken. Communiceer daarom tijdens de behandeling duidelijk met
              de masseur.
            </Item>
            <Item>
              Kies voor Sportmassage wanneer u een betere doorbloeding wilt in
              de diepere spierlagen. Bij stijfheid van spieren door sporten,
              lage rugklachten, syptomen van uitdroging, na langdurige
              trainingen en voor verlichting van spierpijn. Speciale olie kan
              het effect nog verder intensiveren.
            </Item>
            <Item>
              Voor minder gevoelige huidtypes is er tevens Magnesium olie of gel
              ter bevordering van de ontspanning na de massage.
            </Item>
            <Item>
              Sport massage is doorgaans een deelmassage maar kan ook als
              stevige massage toegepast worden op het gehele lichaam
            </Item>
            <Item>
              Sport massage is niet alleen voor sporters. Ook voor niet-sporters
              is een stevige sportmassage prettig bij vastzittende spieren.
            </Item>
            <Item>
              Een goede sportmasseur luistert naar uw lichaam en past de
              behandeling hierop aan. Een sportmassage kan worden ingezet bij
              pijnlijke spieren of spanningsklachten en werkt mobiliserend en
              activerend.
            </Item>
            <Item>
              Maak vastzittende spieren weer soepel en ontspan bij een stevige
              sportmassage.
            </Item>
          </List>
          <DetailsLink
            to="/meer-over-sportmassage-massages"
            className="hover:underline text-green-800"
          >
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
