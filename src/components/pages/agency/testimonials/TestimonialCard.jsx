export default function TestimonialCard({ text }) {
  return (
    <div
      className="
        bg-[#2f2f2f]
        text-yellow-200
        p-10
        rounded-2xl
        w-full
        max-w-xl
        min-h-[220px]
        flex
        items-center
        justify-center
        text-3xl
        font-light
        leading-snug
      "
    >
      “ {text} ”
    </div>
  );
}
