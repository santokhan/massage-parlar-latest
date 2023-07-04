import { useState } from "react";
import axios from "axios";
import SLayout, { SHeader, STitle } from "../section-layout/SectionLayout";
// Mui
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

export default function ContactFrom() {
  return (
    <div id="contact">
      <SLayout>
        <SHeader>
          {/* <STitle>Contact Us</STitle> */}
          <STitle>NEEM CONTACT OP</STitle>
        </SHeader>
        <div className="flex flex-wrap lg:flex-nowrap rounded-3xl bg-white px-2 mt-6">
          <div className="lg:max-w-sm w-full bg-[#3E2093] rounded-2xl text-white flex flex-col relative overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/images/contact.jpg"
              alt="contact"
            />
          </div>
          <div className="w-full p-6 lg:p-10">
            <Form></Form>
          </div>
        </div>
      </SLayout>
    </div>
  );
}

export function Form() {
  const [data, setdata] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  function update(obj) {
    setdata({ ...data, ...obj });
  }

  const [submitted, setsubmitted] = useState(false);

  function Submitting(e) {
    e.preventDefault();
    axios
      .post("https://formspree.io/f/xbjedjqo", { data: data })
      .then((res) => {
        if (res.status === 200) {
          setsubmitted(true);
        }
      });
  }

  return (
    <form onSubmit={Submitting}>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-8">
        <div className="w-full mb-8">
          <label
            htmlFor="firstName"
            className="block mb-2 text-sm font-medium text-textgray"
          >
            {/* First Name */}
            Voornaam
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="John"
            defaultValue={data.firstName}
            required
            onChange={(e) => {
              update({ firstName: e.target.value });
            }}
          />
        </div>
        <div className="w-full mb-8">
          <label
            htmlFor="lastName"
            className="block mb-2 text-sm font-medium text-textgray"
          >
            {/* Last Name */}
            AchternaamAchternaam
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="Doe"
            defaultValue={data.lastName}
            required
            onChange={(e) => {
              update({ lastName: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="flex flex-wrap sm:flex-nowrap sm:gap-8">
        <div className="w-full mb-8">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-textgray"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="info@ahmassage.nl"
            defaultValue={data.email}
            required
            onChange={(e) => {
              update({ email: e.target.value });
            }}
          />
        </div>
        <div className="w-full mb-8">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-textgray"
          >
            {/* Phone */}
            Telefoon
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-700 focus:border-green-700 block w-full p-2.5"
            placeholder="+2511 1668 6900"
            defaultValue={data.phone}
            required
            onChange={(e) => {
              update({ phone: e.target.value });
            }}
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-textgray"
        >
          {/* Message */}
          Bericht
        </label>
        <textarea
          id="message"
          rows="6"
          name="message"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-700 focus:border-green-700"
          placeholder="Write your thoughts here..."
          onChange={(e) => {
            update({ message: e.target.value });
          }}
        ></textarea>
      </div>
      <div className="flex justify-end w-full mt-8">
        <button
          type="submit"
          className="text-white bg-green-700 hover:brightness-90 focus:ring-4 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
        >
          {/* Submit */}
          Indienen
        </button>
      </div>
      {submitted ?? (
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert severity="success">Thank you for contact with us.</Alert>
        </Stack>
      )}
    </form>
  );
}

export function ContactInfo() {
  return (
    <div className="hidden">
      <div>
        <div className="text-xl font-bold mb-2">Contact Information</div>
        <div className="text-gray-300">
          Fill up the form and our team will get back to you with in 24 ours
        </div>
      </div>
      <ul className="py-12 text-gray-300 z-20">
        <li className="flex items-center gap-3 py-3">
          <i className="text-[#FA949D] fa fa-phone" aria-hidden="true"></i>
          <a
            href="tel:"
            className="hover:underline hover:underline-offset-4 hover:decoration-2"
          >
            <span>+2511 16 68 69 00</span>
          </a>
        </li>
        <li className="flex items-center gap-3 py-3">
          <i className="text-[#FA949D] fa fa-phone" aria-hidden="true"></i>
          <a
            href="tel:"
            className="hover:underline hover:underline-offset-4 hover:decoration-2"
          >
            <span>+2511 16 68 69 01</span>
          </a>
        </li>
        <li className="flex items-center gap-3 py-3">
          <i className="text-[#FA949D] fa fa-envelope" aria-hidden="true"></i>
          <a
            href="mailto:info@iconimex.com"
            className="hover:underline hover:underline-offset-4 hover:decoration-2"
          >
            <span>info@iconimex.com</span>
          </a>
        </li>
        <li className="flex items-center gap-3 py-3">
          <i
            className="text-[#FA949D] fa fa-location-arrow"
            aria-hidden="true"
          ></i>
          <address>Bole, Rwanda Street, Addis Ababa, Ethiopia</address>
        </li>
      </ul>
      <div></div>
      <div className="ellipse-contact"></div>
    </div>
  );
}
