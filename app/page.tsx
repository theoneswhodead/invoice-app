import Invoices from "./components/Invoices";
import InvoicesMenu from "./components/InvoicesMenu";

export default function Home() {
  return (
    <main className="w-full h-[100vh]">
        
      <InvoicesMenu />
      <Invoices />
    </main>
  );
}
