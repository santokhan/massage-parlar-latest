import ProductViewer, {
  Desc,
  Image,
  Price,
  Title,
  TitleDescBox,
} from "./ProductViewer";

export default function PVRelaxation() {
  return (
    <ProductViewer>
      <TitleDescBox>
        {/* <Title>Relaxation Massage</Title> */}
        <Title>Ontspanningmassage</Title>
        <Desc>
          Ontspanningsmassage bestaat uit zachte tot gemiddelde druk op het
          lichaam, het manipuleren van zachte weefsels om ontspanning te
          bevorderen. De ontspanningsreactie is de toestand van het hart en de
          ademhalingsfrequentie die naar beneden gaat. Wanneer het lichaam
          begint te ontspannen, nemen de stresshormonen af en ontspannen ze.
        </Desc>
        <Price price="65" time="60"></Price>
      </TitleDescBox>
      <Image src="/images/massages/card/relax.jpg" />
    </ProductViewer>
  );
}
