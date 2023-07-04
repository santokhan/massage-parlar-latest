import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import "./about.css";
import "./main.css";
import ContactFrom from "../components/contact/ContactFrom";

export default function About() {
  return (
    <>
      <Header></Header>
      <div className="py-10"></div>
      <div className="pt-20 pb-10 flex justify-center">
        <img src="/images/qr.webp" alt="qr" className="w-full max-w-lg" />
      </div>
      <ContactFrom></ContactFrom>
      <Footer></Footer>
    </>
  );
}
