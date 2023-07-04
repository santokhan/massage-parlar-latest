import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col order={2}>
        <Image src="/images/tabs/Ontspanningsmassage.jpg" />
      </Col>
      <Col order={1}>
        <Box>
          <Title>Ontspanningsmassage</Title>
          <List>
            <Item>
              Een zachte en volle strijking glooit uw huid onder neutrale of
              geurende olie
            </Item>
            <Item>
              De ontspanningsmassage is een energetische en subtiele massage.
              Langzame zachte strijkingen worden afgewisseld met kloppingen,
              wiegen of mogelijk met klank. Bespreek vooraf welke massagedruk u
              als prettig ervaart. U kunt tevens voorkeuren aangeven voor uw
              massage, aandacht voor voeten en kuiten of liever nek en
              hoofdspanningen? Langzame lange strijkingen brengen de connectie
              met het gevoelsleven terug.
            </Item>
          </List>
          <DetailsLink
            to="/meer-over-ontspanningsmassage-massages"
            className="hover:underline text-green-800"
          >
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
