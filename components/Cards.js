import Image from "next/image";

function Cards({ img, title }) {
  return (
    <div className="hover:scale-105 cursor-pointer transform transition duration-300 ease-out">
      <div className="relative h-60 w-60">
        <Image src={img} layout="fill" className="rounded-xl" />
      </div>
      <h2 className="font-bold text-gray-600 py-2">{title}</h2>
    </div>
  );
}

export default Cards;
