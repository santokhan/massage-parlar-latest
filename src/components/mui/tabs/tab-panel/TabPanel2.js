import { Box, Col, DetailsLink, Image, Row, Title } from "./CardLayout";
import List, { Item } from "./List";

export default function TabPanel1() {
  return (
    <Row>
      <Col>
        <Image src="/images/tabs/relax.jpg" />
      </Col>
      <Col>
        <Box>
          {/* Relaxation massage */}
          <Title>Ontspanningsmassage:</Title>
          <List>
            <Item>
              Een zachte en volle strijking glooit uw huid onder neutrale of
              geurende olie
            </Item>
            <Item>
              De ontspanningsmassage is een energetische en subtiele massage.
              Langzame zachte strijkingen worden afgewisseld met kloppingen,
              wiegen of mogelijk met klank. U kunt tevens voorkeuren aangeven
              bepaalde lichaamsdelen steviger los te maken, aandacht voor voeten
              en kuiten of liever nek en hoofdspanningen? Langzame lange
              strijkingen brengen de connectie met het gevoelsleven terug. Een
              heilzame werking van etherische olie kan de ontspanningseffecten
              verrijken zoals met Lavendel of teatree. Meestal eindigd de
              behandeling door met hoofd en nek drukpunten die met geduld en
              aandacht de diepe ontspanning in uw bewustwording brengen.
            </Item>
            <Item>
              Bij ontspanningsmassage past natuurlijk rustgevende muziek en
              warme olie. Een vakkundig gedoseerde druk en techniek van
              strijkingen werken rustgevend en toch verkwikkend na de
              behandeling. Het is belangrijk als u kiest voor een
              ontspanningsmassage, dat u al enigsinds ontspannen bent wanneer u
              plaatsneemt op de massagetafel. Wanneer u toch wat steviger wilt
              combineren met de ontspanningsmassage, geef dit dan duidelijk
              vooraf aan. Door de lange strijkingen van schouders tot tenen, is
              behandeling zonder ondergoed of badkleding beter uitvoerbaar, maar
              niet noodzakelijk.
            </Item>
            <Item>
              Ontspanningsmassage is vooral gericht op kalmering van gemoederen
              door langestrijkingen, zacht kloppingen, wiegen, afdekking van de
              ogen voor licht en soms het licht gedragen worden van ledematen en
              variatie in druk en snelheid van de strijkingen.
            </Item>
            <Item>
              Kies voor Ontspanningsmassage wanneer u zich futloos voelt, geen
              hoge spiertonus heeft ( zoals na sporten ), even volledig in de
              watten wilt liggen, een diep moment voor uzelf wilt ervaren of om
              van mentale stress af te komen.
            </Item>
          </List>
          <DetailsLink to="/meer-over-hotstone-massages">
            Meer over Shiatsu Massages
          </DetailsLink>
        </Box>
      </Col>
    </Row>
  );
}
