'use client'
import Invoices from "./components/Invoices";
import InvoicesMenu from "./components/InvoicesMenu";
import { useState } from "react";

export default function Home() {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log('asdsad', isOpen)
  return (
    <main className="w-full h-[100vh] relative">
        
      <InvoicesMenu setIsOpen={setIsOpen}/>
      <Invoices isOpen={isOpen} setIsOpen={setIsOpen}/>
    </main>
  );
}
