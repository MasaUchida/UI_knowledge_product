import React from "react";
import Image from "next/image";

type props = {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
};

function PinnedListCard(props: props) {
  const { title, imageUrl, imageAlt } = props;
  return (
    <div className=" flex h-40 w-40 flex-col items-center justify-center gap-y-4 border border-solid border-black p-4">
      <div className=" h-14 w-14 bg-gray-900">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={typeof imageAlt === "string" ? imageAlt : ""}
          ></Image>
        )}
      </div>
      <h3>{title}</h3>
    </div>
  );
}

export default PinnedListCard;
