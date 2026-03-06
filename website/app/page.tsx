import Image from "next/image";

import { BodySection } from "./components/body-section";
import { FaqItem } from "./components/faq-item";
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
            Kindred explores how we can draw from the teachings and principles
            of the{" "}
            <a
              href="https://www.bahai.org/"
              className="text-amber-800 underline"
            >
              Baha&apos;i Faith
            </a>{" "}
            to help people build spiritually grounded relationships that last.
          </p>
          <p className="text-base md:text-xl font-bold leading-relaxed">
            Here are some ways we imagine that.
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
          content="Each day brings a curated set of profiles — enough to explore potential connections meaningfully while staying present with every one."
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
          content={
            <>
              Elevate your conversations at any moment with a collection of
              lovingly-crafted conversation starters.
              <br />
              <br />
              Getting deep has never been easier.
            </>
          }
          image_src="/Conversation.png"
          image_alt=""
        />

        {/* Reflection Section */}
        <BodySection
          title="Honesty"
          content={
            <>
              Parting ways is a natural part of any journey. Ghosting someone
              isn&apos;t.
              <br />
              <br />
              When the time comes, leave a thoughtful note — a small act of
              honesty and care that helps both of you grow.
            </>
          }
          image_src="/Part Ways.png"
          image_alt=""
          imageFirst
        />
      </div>
      {/* Waitlist Section */}
      <section className="text-center text-base md:text-lg font-bold grid gap-6 md:gap-8 mx-auto px-6 md:px-20 lg:px-40 py-8 rounded-2xl">
        <p className="text-3xl md:text-4xl">Join Us in the Journey</p>
        <div className="grid gap-4">
          <p>
            Get behind-the-scenes updates, be the first to test the app, and
            receive invites to exclusive events.
          </p>
          <p>
            Beginning with our upcoming{" "}
            <span className="text-amber-800">Show & Tell + Open Q&A</span>.
          </p>
        </div>
        <WaitlistForm />
      </section>

      <section className="grid gap-8">
        <h2 className="text-3xl md:text-4xl font-bold">FAQ</h2>
        <div className="grid gap-4">
          <FaqItem
            question="Who is building Kindred?"
            answer="We're four people — two married couples in our twenties and thirties — who bonded over a shared observation: there isn't a good digital dating option for the Baha'i community as a whole. We wanted to explore what that could look like. Kindred is our attempt to answer that question."
          />
          <FaqItem
            question="When will this be available?"
            answer="We're still in the exploration stage — speaking with community members, gathering feedback, and shaping what Kindred will become. If this site is up, we're actively working on it. Join our waitlist to stay updated on our progress."
          />
          <FaqItem
            question="Is this only for Baha'is?"
            answer="Not exclusively. Kindred is open to anyone, but it's built around Baha'i principles and directed primarily toward Baha'i communities — that's where we'll be sharing and growing it. So while all are welcome, it will likely resonate most with those who share that foundation."
          />
          <FaqItem
            question="What ages is Kindred for?"
            answer="We haven't finalized this yet, but we anticipate Kindred will be for adults 21 and older."
          />
          <FaqItem
            question="Is Kindred free?"
            answer="Kindred won't be free. Running and maintaining the app — from infrastructure to the people behind it — comes with real, recurring costs. Pricing also helps keep the community genuine and free from bots. That said, we're being very thoughtful about it so it isn't a barrier for most people. We'll share more details as we get closer to launch."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="h-16 md:h-24" />
    </div>
  );
}
