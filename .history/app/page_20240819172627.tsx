import BarMenu from "./components/BarMenu";
import Invoices from "./components/Invoices";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <BarMenu />
      <Invoices />
    </main>
  );
}
