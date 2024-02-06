// import Image from "next/image";

// import { TableDemo } from "@/components/table";

// import { DataTableDemo } from "@/components/Table";
import { AccordionDemo } from "@/components/Accordions";
import { ComboboxDemo } from "@/components/combobox";
import { SheetDemo } from "@/components/sheets";
// import { Accordions } from "@/components/accordion";

// import Hero from "@/components/hero"
// import Accordions from "./components/Accordions"

// import { DialogDemo } from "@/components/dialog";
// import { Accordion } from "@radix-ui/react-accordion";
// import { DialogDemo } from "@/components/Hero";



export default function Home() {
  return (
    <div className="bg-slate-300  h-screen ">
      {/* <h1>hello how are you</h1> */}
      {/* <DialogDemo/> */}
      {/* <Hero/> */}
      {/* <AccordionDemo/> */}
      {/* <DataTableDemo/> */}
      {/* <TableDemo/> */}
      {/* <ComboboxDemo/> */}
      <SheetDemo/>
    </div>
  );
}
