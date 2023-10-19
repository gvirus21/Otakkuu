import Image from "next/image";
import Link from "next/link";
import PurpleGradient, {
  SmallGradient,
} from "@/components/styling-elements/gradients/top-gradient";
import { BsChevronRight } from "react-icons/bs";

export default function Home() {
  const WE_CAN_HELP_YOU_MESSAGES = [
    "Engage with leading Anime & Manga communities.",
    "Share fan art, cosplay, reviews and many more.",
    "Explore your new favourite Anime to binge.",
    "Stay updated with the latest Anime and Manga news.",
  ];

  return (
    <main className="relative min-h-screen text-white overflow-x-hidden mx-auto">
      <div className="absolute h-[60rem] w-screen">
        <PurpleGradient />
      </div>
      <section className="flex flex-col items-center w-screen mt-40">
        <h1 className="text-6xl text-center font-medium w-[58rem]">
          Explore, Connect, and Dive into the Enchanting Universe of Anime
        </h1>
        <h3 className="text-[1.4rem] w-[44rem] text-center text-[#d1d0d0] mt-10">
          Embrace your Otaku Spirit and delve into a compelling realm of
          animation, where the wonders of imagination are limitless.
        </h3>

        <Link
          href="/signup"
          className="flex justify-center items-center h-12 w-36 text-xl mt-12 bg-[#714ED3] hover:bg-[#5333ad] rounded-full"
        >
          Join Us
          <BsChevronRight className="h-4 mt-1 ml-4" />
        </Link>
      </section>
      <section className="flex justify-between items-center w-10/12 max-w-[70rem] mx-auto my-10 py-10">
        <div className="relative h-[30rem] w-[35rem]">
          <Image
            src="/assets/luffy-gear-5.png"
            className="-ml-10"
            height={500}
            width={500}
            alt="luffy-gear-5"
          />
          <SmallGradient className="absolute bottom-0 h-[30rem] w-[50rem] -z-10" />
          <SmallGradient className="absolute -left-20 bottom-20 h-[30rem] w-[50rem] -z-10" />
        </div>
        <div className="flex flex-col w-[38rem]">
          <h2 className="text-6xl font-medium mb-10 tracking-wide">
            Who are we?
          </h2>
          <div className="tracking-wider leading-[1.8rem] font-light text-[#D1D1D1]">
            <p className="mb-6">
              We help you explore the anime world effortlessly. Stay updated
              with the latest news, character polls, and incisive reviews, all
              while being part of a global community of enthusiasts like you.
            </p>
            <p>
              Join Otakkuu and elevate your anime experience. Engage in exciting
              discussions, participate in polls, and discover a universe of
              anime content tailored exclusively for your tastes. Be a part of
              [Your Company], where your anime passion thrives.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-between items-center w-10/12 max-w-[70rem] mx-auto my-10 py-10">
        <h2 className="w-full text-6xl text-center font-medium mb-10 tracking-wide">
          We can help you with,
        </h2>
        <div className="grid grid-cols-2 gap-x-10 gap-y-10 mt-10">
          {WE_CAN_HELP_YOU_MESSAGES.map((message, index) => {
            return (
              <div
                key={index}
                className="h-32 w-[26rem] px-8 py-5 bg-black border-slate-500 border-[0.5px] rounded-xl"
              >
                <h4 className="text-[1.3rem] tracking-wider">{message}</h4>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
