import * as Card from "@/components/Elements/Card";
import Header from "@/components/Elements/Header";
import LocalHeader from "@/components/Elements/LocalHeader";

export default function Home() {
  return (
    <main className="flex h-full">
      <Header></Header>
      <div className="flex w-full flex-col items-center">
        <LocalHeader></LocalHeader>
        <div className="flex flex-wrap justify-between gap-y-1 py-6">
          <Card.PostCard
            title="card"
            created_at={new Date("2000/01/01")}
          ></Card.PostCard>
          <Card.PostCard
            title="card"
            created_at={new Date("2000/01/01")}
          ></Card.PostCard>
          <Card.PostCard
            title="card"
            created_at={new Date("2000/01/01")}
          ></Card.PostCard>
          <Card.PostCard
            title="card"
            created_at={new Date("2000/01/01")}
          ></Card.PostCard>
          <Card.FavoriteCard title="testTitle"></Card.FavoriteCard>
        </div>
      </div>
    </main>
  );
}
