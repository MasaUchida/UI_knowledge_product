import React from "react";
import Image from "next/image";

type props = {
  imageUrl?: string;
  imageAlt?: string;
  tag?: string;
  title: string;
  created_at: Date;
};

function Card(props: props) {
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

export default Card;
