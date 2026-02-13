import Image from "next/image";

interface BodySectionProps {
  title: string;
  content: string;
  image_src: string;
  image_alt: string;
  imageFirst?: boolean;
}

export function BodySection({
  image_src,
  image_alt,
  content,
  title,
  imageFirst = false,
}: BodySectionProps) {
  return (
    <section className="flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-16 mx-auto">
      <div
        className={`flex flex-col gap-6 md:gap-12 text-center md:text-left ${imageFirst ? "md:order-last" : ""}`}
      >
        <p className="text-3xl md:text-4xl font-bold">{title}</p>
        <p className="text-base md:text-lg font-bold max-w-md">{content}</p>
      </div>
      <div
        className={`relative w-48 h-96 md:w-64 md:h-125 shrink-0 ${imageFirst ? "md:order-first" : ""}`}
      >
        <Image
          src={image_src}
          alt={image_alt}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </section>
  );
}
