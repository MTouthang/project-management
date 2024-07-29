import Image from "next/image";
import Sidebar from "./components/Sidebar";
import BoardTask from "./components/BoardTask";

export default function Home() {
  return (
    <main className="flex h-full">
      <Sidebar />
      <BoardTask />
    </main>
  );
}
