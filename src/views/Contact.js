import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "./about.css";
import "./main.css";
import ContactFrom from "../components/contact/ContactFrom";
import SLayout, { SDes, SHeader, STitle } from "../components/section-layout/SectionLayout";

export default function About() {
  return (
    <>
      <Header></Header>
      <div className="py-10"></div>
      {/* <div className="pt-20 pb-10 flex justify-center">
        <img src="/images/qr.webp" alt="qr" className="w-full max-w-lg" />
      </div> */}
      <div className="mt-12 lg:mt-16">
        <SHeader>
          <STitle>Praktijk adres</STitle>
        </SHeader>
        <div className="flex justify-center mt-2">
          <address>
            Ubuntulaan 31,
            1349EH,
            Almere
          </address>
        </div>
      </div>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </>
  );
}
