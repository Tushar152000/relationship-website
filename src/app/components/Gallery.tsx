"use client";
import Image from "next/image";
import first from "@/app/components/assets/first.jpg";
import second from "@/app/components/assets/second.jpg";
import third from "@/app/components/assets/fourth.jpg";

const images = [
  {
    src: first,
    message: "Our first date 💑"
  },
  {
    src: second,
    message: "That cute pout you make 😘"
  },
  {
    src: third,
    message: "The moment I knew it's forever 💍"
  }
];

export default function Gallery() {
  return (
    <div className="px-6 py-16 bg-white">
      <h2 className="text-3xl font-semibold text-center text-pink-600 mb-10">
        Moments Captured 📸
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        {images.map((item, idx) => (
          <div key={idx} className="w-[450px] h-[600px] [perspective:1000px]">
            <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
              <div className="absolute w-full h-full [backface-visibility:hidden]">
                <Image
                  src={item.src}
                  alt={`memory-${idx}`}
                  className="rounded-[16px] w-full h-full object-cover shadow-lg"
                />
              </div>
              {/* Back (Message) */}
              <div className="absolute w-full h-full bg-pink-100 rounded-[16px] text-center flex items-center justify-center p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <p className="text-lg text-pink-700 font-medium">
                  {item.message}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
