import { Accordion, AccordionItem } from "@nextui-org/react";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" w-full h-screen">
      <div className="w-full h-[70%] bg-landing bg-center bg-cover bg-slate-200 flex">
        <div className="w-full flex mt-16 ml-32 flex-col">
          <div className="w-44 h-44 bg-logo bg-center bg-cover"></div>
          Gestão da sua fazenda sempre ao seu alcance.
        </div>
      </div>
    </div>
  );
}
