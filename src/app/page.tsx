import Header from "@/components/Elements/Header";
import LocalHeader from "@/components/Elements/LocalHeader";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full flex ">
      <Header></Header>
      <div className="w-full">
        <LocalHeader></LocalHeader>
      </div>
    </main>
  );
}
