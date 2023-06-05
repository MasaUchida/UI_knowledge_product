import React from "react";
import Image from "next/image";

type cardProps = {
  imageUrl?: string;
  imageAlt?: string;
  tag?: string;
  title: string;
  created_at: Date;
};

export function PostCard(props: cardProps) {
  const { imageUrl, imageAlt, tag, title, created_at } = props;

  return (
    <div className="flex flex-col justify-center border border-solid border-black">
      <div className=" h-60 w-60">
        {imageUrl && (
          <Image
            src={imageUrl}
            alt={typeof imageAlt == "string" ? imageAlt : ""}
          />
        )}
      </div>
      <div className="flex h-16 flex-row items-center border-t border-black px-6">
        <div className="w-full">
          <h3>title</h3>
          <time>1960/01/01</time>
        </div>
        <button>pinButton</button>
      </div>
    </div>
  );
}

type favoriteCardProps = {
  title: string;
};

export function FavoriteCard(props: favoriteCardProps) {
  const { title } = props;

  return (
    <div className="flex h-40 w-40 flex-col items-center justify-center border border-solid border-black">
      <div className=" flex h-14 w-14 items-center justify-center rounded-full bg-black">
        <div className="text-white">icon</div>
      </div>
      <h3>{title}</h3>
    </div>
  );
}
