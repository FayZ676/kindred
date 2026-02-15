import Image from "next/image";

import { BodySection } from "./components/body-section";
import { WaitlistForm } from "./components/waitlist-form";

export default function Home() {
  return (
    <div className="text-gray-800 min-h-screen bg-white px-6 md:px-12 lg:px-24 xl:px-60 grid gap-16 md:gap-28 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen -mx-6 md:-mx-12 lg:-mx-24 xl:-mx-60">
        <div className="absolute inset-0">
          <Image
            src="/Hero Background.png"
            alt="Couple sitting in a field having a conversation"
            fill
            priority
            quality={100}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="relative z-10 h-full px-6 md:px-12 lg:px-16 flex flex-col justify-between py-8 md:py-12">
          <div>
            <h1 className="text-white/85 text-2xl md:text-3xl font-bold tracking-wide md:ml-16">
              Kindred
            </h1>
          </div>
          <div className="md:self-end">
            <p className="text-white/75 text-3xl md:text-5xl font-bold md:text-right md:mr-16 mb-8">
              Love that lasts lifetimes
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="text-left flex flex-col gap-8 md:gap-12">
        <p className="text-3xl md:text-4xl font-bold">About</p>
        <div className="grid gap-4">
          <p className="text-base md:text-xl font-bold leading-relaxed">
            Kindred draws from the teachings and princples of the{" "}
            <a
              href="https://www.bahai.org/"
              className="text-amber-800 underline"
            >
              Baha&apos;i Faith
            </a>{" "}
            to help you build spiritually grounded relationships that last.
          </p>
          <p className="text-base md:text-xl font-bold leading-relaxed">
            Here's what that looks like.
          </p>
        </div>
      </section>

      <div className="grid gap-16 md:gap-14">
        {/* Purpose Section */}
        <BodySection
          title="Purpose"
          content="Start every session with a short and meaningful quote to help you stay grounded."
          image_src="/Splashscreen.png"
          image_alt="Kindred splashscreen with a meaningful quote"
          imageFirst
        />

        {/* Intention Section */}
        <BodySection
          title="Intention"
          content="With just a handful of deeply compatible profiles each day, every person can receive the thoughtfulness they deserve."
          image_src="/Profiles.png"
          image_alt=""
        />

        {/* Character Section */}
        <BodySection
          title="Character"
          content="Innevitable questions on faith, family, life goals, and partnership expectations form the heart of every profile — helping you see what matters most before the first conversation."
          image_src="/Profile.png"
          image_alt=""
          imageFirst
        />

        {/* Conversation Section */}
        <BodySection
          title="Conversation"
          content="Elevate your conversations at any moment with a collection of lovingly-crafted conversation starters. Getting deep has never been easier."
          image_src="/Conversation.png"
          image_alt=""
        />
      </div>

      {/* Waitlist Section */}
      <section className="text-center text-base md:text-lg font-bold grid gap-6 md:gap-8 max-w-4xl mx-auto px-0 md:px-20 lg:px-40 pb-16">
        <p className="text-3xl md:text-4xl">Be Part of the Journey</p>
        <p>Get frequent updates and exclusive early access</p>
        <WaitlistForm />
      </section>
    </div>
  );
}
