import React from "react";
import SLayout, { SHeader, STitle } from "../section-layout/SectionLayout";

export default function ClientSay({ children }) {
  return (
    <div id="clientSay" className="bg-white relative client-say">
      <SLayout>
        <SHeader>
          {/* <STitle>What our happy customers say?</STitle> */}
          <STitle>Wat onze tevreden klanten zeggen?</STitle>
          <div className="mt-8">
            <i
              className="fa fa-quote-right text-3xl xl:text-5xl"
              aria-hidden="true"
            ></i>
          </div>
        </SHeader>
        <div className="max-w-2xl mx-auto py-2 text-center text-[#535353] my-6 xl:my-10">
          Mensen erkennen zelden hoe graag ze een massage krijgen. Maar ik wil
          zeggen dat mijn massagesessies op vrijdag na het werk weken vooruit
          gepland blijven.
        </div>
        <div className="flex justify-center text-xl">Lara Gupta</div>
      </SLayout>
    </div>
  );
}
