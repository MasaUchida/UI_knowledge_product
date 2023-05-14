import Card from "@/components/Elements/Card";
import Header from "@/components/Elements/Header";
import LocalHeader from "@/components/Elements/LocalHeader";
import InputField from "@/components/Form/InputField";

export default function Home() {
  return (
    <main className="flex h-full">
      <Header></Header>
      <div className="flex w-full flex-col items-center">
        <LocalHeader></LocalHeader>
        <div className="flex w-10/12 flex-wrap justify-between gap-y-1 py-6">
          <Card title="card" created_at={new Date("2000/01/01")}></Card>
          <Card title="card" created_at={new Date("2000/01/01")}></Card>
          <Card title="card" created_at={new Date("2000/01/01")}></Card>
          <Card title="card" created_at={new Date("2000/01/01")}></Card>
        </div>
      </div>
    </main>
  );
}
