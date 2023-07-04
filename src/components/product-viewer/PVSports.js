import ProductViewer, {
  Desc,
  Image,
  Price,
  Title,
  TitleDescBox,
} from "./ProductViewer";

export default function PVSports() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Sportmassage</Title>
        <Desc>
          Het is bewezen dat sportmassage spanning in spieren losmaakt en
          vermindert, de bloedsomloop verbetert en de afvoer van afvalproducten
          zoals melkzuur bevordert tijdens intensieve activiteit, en kan helpen
          het lichaam te ontspannen. Dit alles bevordert het herstel en
          verkleint de kans op spierblessures.
        </Desc>
        <Price price="65" time="60"></Price>
      </TitleDescBox>
      <Image src="/images/massages/card/sport.jpg" />
    </ProductViewer>
  );
}
