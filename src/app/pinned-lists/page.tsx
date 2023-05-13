import Header from "@/components/Elements/Header";
import LocalHeader from "@/components/Elements/LocalHeader";
import PinnedListCard from "@/components/Elements/PinnedListCard";

export default function PinnedListsPage() {
  return (
    <main className="flex h-screen">
      <Header></Header>
      <div className="flex w-full flex-col items-center">
        <LocalHeader></LocalHeader>
        <div className="flex w-full justify-center  py-6">
          <ul className="flex w-full max-w-screen-lg flex-wrap justify-between">
            <li>
              <PinnedListCard
                title="pinnedListCard"
                linkUrl=""
              ></PinnedListCard>
            </li>
            <li>
              <PinnedListCard
                title="pinnedListCard"
                linkUrl=""
              ></PinnedListCard>
            </li>
            <li>
              <PinnedListCard
                title="pinnedListCard"
                linkUrl=""
              ></PinnedListCard>
            </li>
            <li>
              <PinnedListCard
                title="pinnedListCard"
                linkUrl=""
              ></PinnedListCard>
            </li>
            <li>
              <PinnedListCard
                title="pinnedListCard"
                linkUrl=""
              ></PinnedListCard>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
