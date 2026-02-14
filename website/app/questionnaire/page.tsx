import { QuestionnaireForm } from "../components/questionnaire-form";

export default async function QuestionnairePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const { email } = await searchParams;

  return (
    <div className="text-gray-800 min-h-screen bg-white px-6 md:px-12 lg:px-24 xl:px-60 flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          Thanks for joining the waitlist! 🎉
        </h1>
        <p className="mt-4 text-base md:text-xl leading-relaxed max-w-2xl text-gray-600">
          We&apos;re thrilled to share this journey with you. Before you go,
          we&apos;d love to hear from you — your thoughts will directly shape
          what we build.
        </p>
      </div>
      <QuestionnaireForm email={email} />
    </div>
  );
}
