export const NewArticle = ({ title, text }) => {
  return (
    <article className="h-[140px] border-b-2 border-GrayishBlue lg:h-[160px] lg:py-4 py-7 last:border-none">
      <h2 className="cursor-pointer hover:text-SoftOrange mb-3 font-bold text-[20px]">
        {title}
      </h2>
      <p className="text-[15px]">{text}</p>
    </article>
  );
};
