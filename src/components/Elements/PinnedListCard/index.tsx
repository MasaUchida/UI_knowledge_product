import React from "react";
import Image from "next/image";
import Link from "next/link";

type props = {
  title: string;
  imageUrl?: string;
  imageAlt?: string;
  linkUrl: string;
};

function PinnedListCard(props: props) {
  const { title, imageUrl, imageAlt, linkUrl } = props;
  return (
    <Link href={linkUrl}>
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
    </Link>
  );
}

export default PinnedListCard;
