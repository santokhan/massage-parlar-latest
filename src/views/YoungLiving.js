import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ContactFrom from "../components/contact/ContactFrom";
import Gallary from "../components/gallary/Gallary";
import PageLoader from "../components/page-loader/PageLoader";
import SLayout, {
  SDes,
  SHeader,
  SMain,
  STitle,
} from "../components/section-layout/SectionLayout";
import List, { Item } from "../components/whatweimport/List";
import { Item as Bordered } from "../components/mui/tabs/tab-panel/List";
import YoungLivingVideo from "../components/young-living/YoungLivingVideo";

export default function YoungLiving() {
  return (
    <div className="text-light-sky">
      <PageLoader></PageLoader>
      <Header></Header>
      <div className="py-8"></div>
      <SLayout>
        <SHeader>
          <STitle>Experience Young Livings Essential Oil</STitle>
          {/* <SDes>Here in practice or at your home!</SDes> */}
          <SDes>Hier in de praktijk of bij u thuis!</SDes>
        </SHeader>
        <SMain>
          <img
            src="/images/young-living/everyday-oils.png"
            alt="product"
            className="w-full"
          />
        </SMain>
        <YoungLivingVideo></YoungLivingVideo>
      </SLayout>
      <Evenings></Evenings>
      <Gallary></Gallary>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </div>
  );
}

export function Evenings() {
  return (
    <div className="bg-white">
      <SLayout>
        <SHeader>
          {/* <STitle>Information evenings Young Living</STitle> */}
          <STitle>YOUNG LIVING INFORMATIEAVOND</STitle>
          <SDes>
            Op deze informatieavond leer je onder andere waarom Young Living zo
            uniek is
          </SDes>
        </SHeader>
        <SMain>
          <div>
            <div className="py-4 px-3">
              <STitle className="mb-4 text-lg lg:text-xl">
                Wat kan Young Living olie voor jou doen?
              </STitle>
              <List>
                <Bordered>
                  Je zult deze avond ervaren hoe invloedrijk deze fijne nevel
                  van Truly Healing plantenextracten is. Via de luchtwegen, de
                  huid en zelfs in eten of drinken. De toepassingen zijn zeer
                  divers.
                </Bordered>
                <Bordered>
                  Van het zaadje tot het zegel op de fles. Alle processen worden
                  begeleid door Young Living. Geen enkel ander bedrijf ter
                  wereld kan dit garanderen. Young Living creëerde een nieuwe
                  standaard voor kwaliteit. En je merkt het!
                </Bordered>
              </List>
            </div>
            <div className="py-4 px-3">
              <STitle className="mb-4 text-lg lg:text-xl">
                Aan het einde van deze informatieavond weet u:
              </STitle>
              <List>
                <Item>Welke oliën zijn geschikt voor inwendig gebruik?</Item>
                <Item>Wat niet te doen met etherische olie?</Item>
                <Item>Gebruikt essentiële olie in uw dagelijks leven.</Item>
                <Item>
                  Hoe familieleden en dierbaren met aandoeningen te helpen.
                </Item>
                <Item>Waar en hoe je de olie het beste kunt gebruiken.</Item>
                <Item>
                  Ioniseren, verrijken en zuiveren van de binnenlucht.
                </Item>
                <Item>
                  Mogelijkheden voor ontgifting en stabilisatie van
                  hormoonschommelingen.
                </Item>
                <Item>
                  Stimulatie of ontspanning van je spijsvertering, beter slapen.
                </Item>
                <Item>Ontspanning van spieren en mentale rust of focus.</Item>
              </List>
            </div>
            <div className="py-4 px-3">
              <List>
                <Bordered>
                  Elke zaterdagavond van 19:00 tot 22:00 uur een uitgebreid
                  informatieavond over Young Living. De deur is open van 18.30
                  uur.
                </Bordered>
                <Bordered>
                  Onder het genot van een kopje thee en olie verstuivers word je
                  kennis gemaakt met veel verschillende oliën en hoe ze werken.
                  Iets anders, en voor velen een diepgaande ervaring mee de
                  kracht van puur natuur.
                </Bordered>
                <Bordered>
                  Omdat ik het graag overzichtelijk en informeel houd, is er een
                  maximaal 6 deelnemers en minimaal 2. Aanmelden kan door uw
                  gegevens en de gewenste datum door te geven via het contact
                  formulier.
                </Bordered>
                <Bordered>
                  Locatie is Mahlerstraat 72, 3131SH Vlaardingen. Entree is €
                  10, gelieve gepast te betalen bij aankomst. U kunt gratis
                  parkeren voor de deur.
                </Bordered>
                <Bordered>
                  Bij aankomst zijn er 2 groene carportdeuren met metaal
                  beplating links van de ingang van het portiek. Voel je vrij en
                  kom in. De informatieavond vindt plaats in de praktijk in de
                  achterkant van de tuin.
                </Bordered>
              </List>
            </div>
          </div>
        </SMain>
      </SLayout>
    </div>
  );
}
