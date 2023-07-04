import ProductViewer, {
  Desc,
  Image,
  Price,
  Title,
  TitleDescBox,
} from "./ProductViewer";

export default function MassageChair() {
  return (
    <ProductViewer>
      <TitleDescBox>
        <Title>Shiatsumassage</Title>
        <Desc>
          Shiatsu is een oude vorm van massage gebaseerd op de Chinese
          acupunctuurtheorie die vaak het gebruik van ademhaling en stretching
          omvat. Shiatsu kan door de kleding heen of op de blote huid worden
          gedaan en maakt gebruik van statische druk, die kan variëren van licht
          vasthouden tot diepe fysieke druk uitgeoefend met de handpalm of duim.
        </Desc>
        <Price price="65" time="60"></Price>
      </TitleDescBox>
      <Image src="/images/massages/card/shiatsu.jpg" />
    </ProductViewer>
  );
}
