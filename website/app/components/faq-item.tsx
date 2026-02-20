interface FaqItemProps {
  question: string;
  answer: string;
}

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group border border-gray-200 rounded-2xl p-6 shadow-sm">
      <summary className="text-base md:text-lg font-bold cursor-pointer list-none flex items-center justify-between">
        {question}
        <span className="ml-4 text-amber-800 transition-transform duration-200 group-open:rotate-45 text-2xl leading-none">
          +
        </span>
      </summary>
      <p className="mt-4 text-base md:text-lg font-bold text-gray-600">
        {answer}
      </p>
    </details>
  );
}
