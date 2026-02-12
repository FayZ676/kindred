import Image from "next/image";

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
      <section className="text-left flex flex-col gap-8 md:gap-12 max-w-96">
        <p className="text-3xl md:text-4xl font-bold">About</p>
        <p className="text-base md:text-xl font-bold leading-relaxed">
          Kindred draws from the teachings and principles of the{" "}
          <a href="https://www.bahai.org/" className="text-amber-800 underline">
            Baha&apos;i faith
          </a>{" "}
          to create a safe-haven for courtship.
        </p>
      </section>

      <div className="grid gap-16 md:gap-14">
        {/* Purpose Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-36 mx-auto">
          <div className="flex flex-col gap-6 md:gap-12 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold">Purpose</p>
            <p className="text-base md:text-lg font-bold max-w-md">
              Begin every session in Kindred with a short and meaningful quote
              to help you stay grounded.
            </p>
          </div>
          <div className="relative w-48 h-96 md:w-64 md:h-125 shrink-0">
            <Image
              src="/Splashscreen.png"
              alt="Kindred splashscreen with a meaningful quote"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Intention Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-16 lg:gap-36 mx-auto">
          <div className="relative w-48 h-96 md:w-64 md:h-125 shrink-0">
            <Image
              src="/Profiles.png"
              alt="Kindred profiles view"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6 md:gap-12 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold">Intention</p>
            <p className="text-base md:text-lg font-bold max-w-md">
              Something about how showing less profiles every day makes for a
              better experience.
            </p>
          </div>
        </section>

        {/* Character Section */}
        <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-36 mx-auto">
          <div className="flex flex-col gap-6 md:gap-12 text-center md:text-left">
            <p className="text-3xl md:text-4xl font-bold">Character</p>
            <p className="text-base md:text-lg font-bold max-w-md">
              Crucial questions and answers around topics such as values,
              expectations, and more are the focal-point of every profile.
            </p>
          </div>
          <div className="relative w-48 h-96 md:w-64 md:h-125 shrink-0">
            <Image
              src="/Profile.png"
              alt="Kindred profile detail view"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>
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
