import Image from "next/image";

import { WaitlistForm } from "./components/waitlist-form";

export default function Home() {
  return (
    <div className="text-gray-800 min-h-screen bg-white px-6 md:px-12 lg:px-60 grid gap-28">
      {/* Hero Section */}
      <section className="relative h-screen -mx-6 md:-mx-12 lg:-mx-60">
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
            <h1 className="text-white/85 text-2xl md:text-3xl font-bold tracking-wide ml-16">
              Kindred
            </h1>
          </div>
          <div className="self-end">
            <p className="text-white/75 text-4xl md:text-5xl font-bold text-right mr-16 mb-8">
              Love that lasts lifetimes
            </p>
          </div>
        </div>
      </section>

      {/* Subtitle Section */}
      <section className="text-left flex flex-col gap-12 max-w-96">
        <p className="text-4xl font-bold">About</p>
        <p className="text-lg md:text-xl font-bold leading-relaxed">
          Kindred draws from the teachings and principles of the{" "}
          <a href="https://www.bahai.org/" className="text-amber-800 underline">
            Baha'i faith
          </a>{" "}
          to create a safe-haven for courtship.
        </p>
      </section>

      <div className="grid gap-14">
        {/* Purpose Section */}
        <section className="flex items-center gap-36 mx-auto">
          <div className="flex flex-col gap-12">
            <p className="text-4xl font-bold">Purpose</p>
            <p className="text-lg font-bold max-w-md">
              Begin every session in Kindred with a short and meaningful quote
              to help you stay grounded.
            </p>
          </div>
          <div className="relative w-64 h-125">
            <Image
              src="/Splashscreen.png"
              alt="Couple sitting in a field having a conversation"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Character Section */}
        <section className="flex items-center gap-36 mx-auto">
          <div className="relative w-64 h-125">
            <Image
              src="/Profiles.png"
              alt="Couple sitting in a field having a conversation"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-12">
            <p className="text-4xl font-bold">Intention</p>
            <p className="text-lg font-bold max-w-md">
              Something about how showing less profiles every day makes for a
              better experience.
            </p>
          </div>
        </section>

        {/* Character Section */}
        <section className="flex items-center gap-36 mx-auto">
          <div className="flex flex-col gap-12">
            <p className="text-4xl font-bold">Character</p>
            <p className="text-lg font-bold max-w-md">
              Crucial questions and answers around topics such as values,
              expectations, and more are the focal-point of every profile.
            </p>
          </div>
          <div className="relative w-64 h-125">
            <Image
              src="/Profile.png"
              alt="Couple sitting in a field having a conversation"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </section>
      </div>

      {/* Waitlist Section */}
      <section className="text-center text-lg font-bold grid gap-8 max-w-4xl mx-60">
        <p className="text-4xl">Be Part of the Journey</p>
        <p>Get frequent updates and exclusive early access</p>
        <WaitlistForm />
      </section>
    </div>
  );
}
