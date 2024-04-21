import { createTheme, ThemeProvider } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import PageLoader from "../components/page-loader/PageLoader";
import Styles from '../components/terms/Terms.module.css'
// import SLayout, {
//   SHeader,
//   SMain,
//   STitle,
// } from "../components/section-layout/SectionLayout";
const theme = createTheme({
    palette: {
        primary: {
            main: green[900],
        },
    },
});

export default function Terms() {
    console.log(Styles);

    return (
        <ThemeProvider theme={theme}>
            <div className="text-light-sky relative bg-gray-50">
                <PageLoader />
                <Header />
                <div className="pt-20"></div>
                <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-4 border-b py-8 lg:py-16">
                    <div className="w-full space-y-2">
                        <div className="text-2xl font-semibold uppercase playfair text-center w-full">ALGEMENE VOORWAARDEN VAN MASSAGEWORKS</div>
                        <p className="text-center w-full text-slate-400">
                            MassageWorks(hierna: “MW”) &nbsp;is gevestigd te Bostuin 20.1
                            &nbsp;geregistreerd als KOR onderneming bij de Belastingdienst onder kvk
                            nummer 89363639.
                        </p>
                    </div>

                    <div className="text-sm font-medium text-slate-400 mt-8">
                        <div className={[Styles.terms].join(" ")}>

                            <div>
                                <h4>Artikel 1. Toepasselijkheid algemene voorwaarden</h4>
                                <p>
                                    1.1 Deze algemene voorwaarden gelden voor iedere aanbieding, behandeling en
                                    transactie tussen MW en haar cliënten.
                                </p>
                                <p>
                                    1.2 Van deze algemene voorwaarden kan niet worden afgeweken, tenzij partijen
                                    afwijkende bedingen en bepalingen uitdrukkelijk en schriftelijk met elkaar
                                    zijn overeengekomen.
                                </p>
                                <p>
                                    1.3 Eventuele (algemene) voorwaarden van cliënten en/of derden worden
                                    uitdrukkelijk van de hand gewezen.
                                </p>
                                <p>
                                    1.4 MW kan op ieder gewenst moment, zonder voorafgaande kennisgeving en
                                    opgave van redenen deze algemene voorwaarden wijzigen en aanvullen. MW zal
                                    de meest recente versie van de algemene voorwaarden aan haar cliënt ter hand
                                    stellen dan wel deze op haar website publiceren.
                                </p>
                                <p>
                                    1.5 Als één of meer bepalingen in deze algemene voorwaarden op enig moment
                                    geheel of gedeeltelijk niet zijn verklaard, nietig mochten worden verklaard
                                    of vernietigd worden, dan blijven de overige bepalingen in deze algemene
                                    voorwaarden volledig van toepassing. Partijen zullen in overleg treden om
                                    een nieuwe bepaling ter vervanging van de nietige of vernietigde bepaling
                                    overeen te komen. Daarbij wordt zoveel mogelijk het doel en de strekking van
                                    de oorspronkelijke bepaling in acht genomen.
                                </p>
                            </div>

                            <div>
                                <h4>Artikel 2. Afspraken</h4>
                                <p>
                                    2.1 Een afspraak met MW kan via de website, telefonisch of per e-mail worden
                                    gemaakt. Afspraken gemaakt met MW zijn bindend.
                                </p>
                                <p>
                                    2.2 Voorafgaand aan een eerste massage/behandeling zal MW kort een aantal
                                    vragen stellen ter kennismaking en om eventuele klachten te inventariseren.
                                    Aan de hand daarvan stelt MW eventueel een behandelplan op.
                                </p>
                                <p>
                                    2.2 De cliënt dient verhindering uiterlijk binnen 24 uur voorafgaande aan de
                                    afspraak aan MW kenbaar maken. Binnen 24 uur geannuleerde afspraken worden
                                    volledig aan de cliënt doorberekend. Dit geld ook voor het te laat
                                    verschijnen op de afspraak (+ 10 min) of in geval van no show. Bij het te
                                    laat verschijnen kan de afspraak alleen doorgaan indien MW voldoende tijd
                                    heeft om de behandeling uit te voeren.&nbsp;
                                </p>
                                <p>
                                    2.3 Het is de cliënt toegestaan in geval van verhindering, om een derde in
                                    zijn/haar plaats naar de afspraak met MW te laten gaan.
                                </p>
                                <p>
                                    2.4 MW heeft voor zakelijke contracten en opdrachtgevers (handelend in de
                                    hoedanigheid van beroep en bedrijf) een restitutieregeling. Bij het
                                    annuleren worden de volgende percentages in rekening gebracht:
                                </p>

                                <ul className="list-disc px-4 space-y-4">
                                    <li>
                                        Bij annulering binnen één maand voor de afspraakdatum
                                        wordt 20% van de hoofdsom in rekening gebracht;
                                    </li>
                                    <li>
                                        Bij annulering binnen 2 weken voor de afspraakdatum
                                        wordt 50% van de hoofdsom in rekening gebracht;
                                    </li>
                                    <li>
                                        Bij annulering binnen 1 week voor de afspraakdatum wordt
                                        80% van de hoofdsom in rekening gebracht;
                                    </li>
                                    <li>
                                        Bij annulering binnen 24 uur voor de afspraak datum
                                        wordt 100% van de hoofdsom in rekening gebracht.
                                    </li>
                                </ul>
                                <p>
                                    2.5 MW behoudt zich het recht voor om geplande afspraken te verzetten of te
                                    annuleren, indien zij geen uitvoering kan geven aan de overeenkomst, zonder
                                    gehouden te zijn tot enige schadevergoeding.
                                </p>
                            </div>

                            <div>
                                <h4>Artikel 3. Uitvoering van de behandeling</h4>
                                <p>
                                    3.1 MW voert de behandeling naar beste inzicht en vermogen uit,
                                    overeenkomstig de eisen van goed vakmanschap. Een en ander op grond van de
                                    op dat moment bekende stand der wetenschap.
                                </p>
                                <p>
                                    3.2 Indien de cliënt in behandeling is van een arts, fysiotherapeut,
                                    specialist en/of medicijnen gebruikt, dient de cliënt de arts,
                                    fysiotherapeut en/of specialist te raadplegen of de gewenste behandeling
                                    uitgevoerd mag worden.
                                </p>
                                <p>
                                    3.3 Indien de cliënt zwanger is of van plan zwanger te worden, dient dit te
                                    allen tijde – voorafgaand aan de behandeling – aan MW te worden gemeld. In
                                    het eerste trimester van een zwangerschap worden er geen behandelingen
                                    uitgevoerd.
                                </p>
                                <p>
                                    3.4 MW zal nooit claimen bepaalde ziekten of aandoeningen te kunnen genezen
                                    en zal nooit adviseren om een door een arts aangeraden reguliere medicatie
                                    of behandeling te stoppen of te veranderen.
                                </p>
                                <p>
                                    3.5 MW onthoudt zich van het stellen van medische diagnoses. Adviezen en
                                    behandelingen zijn gebaseerd op kennis van sport/klachtenbehandeling,
                                    Triggerpoint-therapie, Stoelmassage, Aromatherapie, Wellnessmassage en jaren
                                    werkervaring in de paramedische zorgsector..
                                </p>
                                <p>
                                    3.6 MW zal de cliënt tijdig inlichten over financiële consequenties van
                                    wijzigingen en aanvullingen van de behandeling.
                                </p>
                                <p>
                                    3.7 De cliënt is te allen tijde zelf verantwoordelijk voor de informatie en
                                    de juistheid ervan die hij/zij tijdens het intakegesprek aan MW verstrekt,
                                    zodat MW de behandeling zo verantwoordelijk en veilig mogelijk uit kan
                                    voeren.
                                </p>
                                <p>
                                    3.8 De cliënt maakt uit eigen vrije wil en op eigen risico gebruik van
                                    diensten van MW en derhalve kan MW niet aansprakelijk worden gesteld voor
                                    enige schade, ontstaan voor/tijdens/na deelneming/gebruikmaking aan/van
                                    behandelingen en/of diensten. MW is niet verantwoordelijk voor schade en/ of
                                    letsel als gevolg van verzwijgen van medische informatie zoals lichamelijke
                                    en/of geestelijke aandoeningen, blessures en medicijngebruik.
                                </p>
                                <p>
                                    3.9 Ethiek en hygiëne staan hoog in het vaandel bij MW en dit verwacht MW
                                    ook van de cliënt. Vanuit het oogpunt van hygiëne, wordt van de cliënt
                                    verwacht dat hij/zij vlak voor de behandeling heeft gedoucht.
                                </p>
                                <p>
                                    3.10 Alle behandelingen worden, met terzijdestelling van artikelen 7:404,
                                    7:407 lid 2 en 7:409 van het Burgerlijk Wetboek aanvaard en uitgevoerd door
                                    MW.
                                </p>
                                <p>
                                    3.11 Overeengekomen termijnen waarbinnen de behandeling wordt uitgevoerd,
                                    zijn slechts indicatief en is nimmer te beschouwen als fatale termijnen.
                                </p>
                                <p>
                                    3.12 MW is gerechtigd een behandeling te laten verrichten door derden, die
                                    naar het oordeel van MW beschikken over dezelfde kwaliteiten.
                                </p>
                                <p>
                                    3.13 MW hanteert voor bedrijven afwijkende algemene voorwaarden. Als u
                                    massages in uw bedrijfsvoering wilt opnemen vraag dan Jan Morks naar de
                                    Algemene Voorwaarden voor bedrijven.&nbsp;
                                </p>
                            </div>

                            <div>
                                <h4>Artikel 4. Prijzen &amp; Betaling</h4>
                                <p>
                                    4.1 Alle prijzen die MW hanteert zijn in euro’s en worden vermeld inclusief
                                    BTW en exclusief reiskosten, tenzij anders vermeld.
                                </p>
                                <p>
                                    4.2 Alle kosten van de voor de uitvoering van de behandeling benodigde
                                    producten zijn bij de prijs inbegrepen. MW is vrij in de keuze van haar
                                    producten.
                                </p>
                                <p>
                                    4.3 MW behoudt zich het recht voor om haar prijzen, op haar website, sociale
                                    media of anderszins kenbaar gemaakt, tussentijds te wijzigen indien zij dit
                                    nodig acht. MW vermeldt prijswijzigingen 30 dagen voor de ingangsdatum.
                                </p>
                                <p>
                                    4.5 Tenzij schriftelijk anders is overeengekomen, dient de cliënt direct na
                                    afloop van de behandeling de betaling per tikkie, bankoverschrijving of
                                    contant te voldoen.&nbsp;
                                </p>
                                <p>
                                    4.6 Aanbiedingen zijn geldig in de aangegeven periode en/of zolang de
                                    voorraad strekt.
                                </p>
                            </div>

                            <div>
                                <h4>Artikel 5. Aansprakelijk</h4>
                                <p>
                                    5.1 MW is uitsluitend aansprakelijk voor directe schade die voortvloeit uit
                                    of verband houdt met de uitvoering van de behandeling, indien en voor zover
                                    die schade is veroorzaakt door opzet of bewuste roekeloosheid aan de zijde
                                    van MW.
                                </p>
                                <p>
                                    5.2 Indien MW aansprakelijk is, is deze aansprakelijkheid beperkt tot het
                                    bedrag dat door een gesloten aansprakelijkheidsverzekering wordt uitbetaald,
                                    vermeerderd met het bedrag van een eventueel van toepassing zijnde eigen
                                    risico. Bij gebreke van een (volledige) uitkering van het schadebedrag door
                                    verzekeringsmaatschappij Balens, is de aansprakelijkheid beperkt tot
                                    maximaal het totaalbedrag van de behandeling, althans dat gedeelte van de
                                    behandeling waarop de aansprakelijkheid betrekking heeft.
                                </p>
                                <p>5.3 MW is niet aansprakelijk voor:</p>
                                <ul className="list-disc px-4 space-y-4">
                                    <li>
                                        schade van welke aard dan ook, doordat MW is uitgegaan
                                        van de door de cliënt onjuist verstrekte informatie of onvolledige
                                        informatie over relevante lichamelijke aandoeningen, medicijngebruik,
                                        werkzaamheden of vrijetijdsbesteding;
                                    </li>
                                    <li>
                                        diefstal, beschadiging en/of verlies van persoonlijke
                                        eigendommen van de cliënt tijdens de behandeling;
                                    </li>
                                    <li>
                                        gezondheidsschade en/of medische kosten die voortvloeien
                                        uit schade voortkomende uit de behandeling;
                                    </li>
                                    <li>
                                        tegenvallende resultaten, indien MW de behandeling op
                                        overeengekomen wijze heeft volbracht.
                                    </li>
                                </ul>
                                <p>
                                    5.4 MW heeft te allen tijde het recht, indien en voor zover mogelijk, de
                                    schade ongedaan te maken, door herstel of verbetering van de behandeling
                                    c.q. of het verstrekken van een nieuw product.
                                </p>
                                <p>
                                    5.5 Een vordering tot schadevergoeding door de cliënt dient uiterlijk binnen
                                    14 dagen nadat de cliënt de schade heeft ontdekt of redelijkerwijze had
                                    kunnen ontdekken bij MW te zijn ingediend. Bij gebreke van een tijdige
                                    indiening van een vordering tot schadevergoeding, vervalt het recht op
                                    schadevergoeding door de cliënt.
                                </p>
                                <p>
                                    5.6 Het in dit artikel bepaalde geldt behoudens opzet of grove nalatigheid
                                    van MW en indien dwingendrechtelijke bepalingen zich hier niet tegen
                                    verzetten.
                                </p>
                            </div>

                            <div>
                                <h4>Artikel 6. Garantie, onderzoek en reclames</h4>
                                <p>
                                    6.1 Klachten met betrekking tot de behandeling dienen schriftelijk binnen 7
                                    dagen na de uitvoering daarvan aan MW kenbaar te worden gemaakt.
                                </p>
                                <p>
                                    6.2 De cliënt is gehouden direct het resultaat van de behandeling te
                                    beoordelen op kwaliteit.
                                </p>
                                <p>
                                    6.3 Indien een klacht na het oordeel van MW gegrond is, zal zij kosteloos
                                    een nieuwe behandeling met de cliënt inplannen of een (evenredig deel) van
                                    de prijs crediteren.&nbsp;
                                </p>
                                <p>Artikel 7. Leeftijd</p>
                                <p>
                                    7.1 Alle behandelingen van MW worden uitgevoerd bij personen boven de 18
                                    jaar.
                                </p>
                                <p>
                                    <br />
                                </p>
                                <p>
                                    7.2 Vanaf 16 jaar tot 18 jaar alleen met toestemming van ouder/verzorger.
                                    Onder de 16 jaar voert MW geen behandelingen uit.
                                </p>
                                <p>Artikel 8. Geheimhouding</p>
                                <p>
                                    8.1 MW is verplicht tot geheimhouding van alle vertrouwelijke informatie die
                                    de cliënt mededeelt tijdens de behandeling. Informatie geldt als
                                    vertrouwelijk wanneer dit door de cliënt is medegedeeld of als dit
                                    voortvloeit uit de aard van de informatie.
                                </p>
                                <p>
                                    8.2 De geheimhouding vervalt echter indien op grond van een wettelijke
                                    bepaling, indien dit noodzakelijk is voor de uitvoering van de overeenkomst
                                    of een rechterlijke uitspraak MW verplicht is de informatie aan derden te
                                    verstrekken.
                                </p>
                            </div>

                            <div>
                                <h4>Artikel 9. Gedrag</h4>
                                <p>
                                    9.1 De cliënt dient zich behoorlijk te gedragen volgens algemeen normen en
                                    waarden. Indien de cliënt na herhaaldelijke waarschuwingen onbehoorlijk
                                    gedrag blijft vertonen, heeft MW het recht om bij de cliënt een behandeling
                                    te weigeren/stoppen zonder opgave van een reden en zonder het recht van de
                                    cliënt op enige (schade)vergoeding.
                                </p>
                                <p>
                                    9.2 Mobiele telefoons, piepers e.d. dienen te worden uitgeschakeld of op
                                    stil te worden gezet voor aanvang van een behandeling.
                                </p>
                                <p>9.3 MW meldt diefstal altijd bij de politie.</p>
                            </div>

                            <div>
                                <h4>Artikel 10. Overmacht&nbsp;</h4>
                                <p>
                                    10.1 Wordt de uitvoering van een behandeling door MW onmogelijk gemaakt door
                                    een oorzaak die MW niet kan worden toegerekend of waardoor nakoming van haar
                                    verplichtingen in redelijkheid niet van MW kan worden verlangd, dan is MW
                                    gerechtigd de uitvoering van de behandeling op te schorten tot het moment
                                    dat zij alsnog in staat is deze op de overeengekomen wijze na te komen.
                                </p>
                                <p>
                                    10.2 Onder overmacht wordt in deze algemene voorwaarden verstaan: een
                                    omstandigheid die niet te wijten is aan de schuld van MW en noch krachtens
                                    de wet, rechtshandeling of in het verkeer geldende opvattingen voor rekening
                                    kan komen van MW. Naast deze uitleg van overmacht uit hoofde van de wet en
                                    jurisprudentie wordt onder overmacht tevens begrepen: alle van buiten
                                    komende oorzaken, voorzien of onvoorzien, waarop MW geen invloed kan
                                    uitoefenen, doch waardoor MW niet in staat is de verplichtingen na te komen.
                                </p>
                                <p>
                                    10.3 In geval van overmacht zal MW – indien mogelijk – met de cliënt een
                                    nieuwe afspraak inplannen.
                                </p>
                                <p>
                                    10.4 MW is in een overmachtsituatie geen enkele (schade)vergoeding
                                    verschuldigd, ook niet als zij als gevolg van de overmachtsituatie enig
                                    voordeel geniet.
                                </p>
                                <p>Artikel 11. Toepasselijk recht en bevoegde rechter</p>
                                <p>
                                    11.1 &nbsp;Op alle aanbiedingen, behandelingen en transacties waarop deze
                                    algemene voorwaarden van toepassing zijn, is uitsluitend het Nederlands
                                    recht van toepassing.
                                </p>
                                <p>
                                    <br />
                                </p>
                                <p>
                                    11.2 De toepasselijkheid van het Weens Koopverdrag of andere van toepassing
                                    zijnde Internationale wet- en regelgeving is uitdrukkelijk uitgesloten.
                                </p>
                                <p>
                                    11.3 MW mag deze algemene voorwaarden eenzijdig wijzigen. De meest recente
                                    versie is dan op alle overeenkomsten inclusief de reeds gesloten
                                    overeenkomsten geldig. Aan afspraken tussen partijen die afwijken van de
                                    algemene voorwaarden kunnen geen rechten worden ontleend.
                                </p>
                                <p>
                                    11.4 De Nederlandse rechter in het arrondissement waar MW is gevestigd is,
                                    behoudens dwingendrechtelijke bepalingen, exclusief bevoegd kennis te nemen
                                    van eventuele geschillen tussen partijen.
                                </p>
                                <p>
                                    Bij het maken van een afspraak wordt altijd uw email, adres en
                                    telefoonnummer gevraagd voor onze administratie, deze worden gehanteerd
                                    volgens de Privacywet. Zie link:{" "}
                                    <a href="https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens">
                                        https://www.rijksoverheid.nl/onderwerpen/privacy-en-persoonsgegevens
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </ThemeProvider>
    );
}
