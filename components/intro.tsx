import Image from "next/image";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="flex iterms-center justify-center">
        <div>
          <Image
            src="/myself.jpeg"
            alt="Ahad"
            width="192"
            height="192"
            quality="90"
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white"
          ></Image>
        </div>
      </div>
    </section>
  );
};

export default Intro;
