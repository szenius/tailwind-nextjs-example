import Image from "next/image";

export default function PlanetCard({
  title,
  image,
  description,
  toggleBookmark,
}) {
  return (
    <div className="w-1/4">
      <div className="flex justify-between">
        <h2
          id="card-title"
          className="text-m leading-loose text-center uppercase tracking-widest pl-2"
        >
          {title}
        </h2>
        <button onClick={() => toggleBookmark(title)}>+</button>
      </div>
      <Image
        src={image}
        className="mx-auto my-4"
        alt={title}
        width="100%"
        height="100%"
        layout="responsive"
      />
      <p className="leading-relaxed">{description}</p>
    </div>
  );
}
