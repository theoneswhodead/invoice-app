import BarMenu from "./components/BarMenu";
import Invoices from "./components/Invoices";

export default function Home() {
  return (
    <main className="">
        <BarMenu dark={true}/>
      <Invoices />
    </main>
  );
}
