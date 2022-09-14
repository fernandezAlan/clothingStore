export default function Card({ title, description, price, image }) {
  return (
    <div className={"w-72 flex flex-col items-center"}>
      <h5 className="mb-8 text-ellipsis overflow-hidden w-72 whitespace-nowrap text-center">
        {title}
      </h5>
      <img src={image} alt={title} className={"w-1/2 h-60 object-contain"} />
      <strong>${price} USD</strong>
      <button className="bg-black text-white w-16 rounded">buy</button>
    </div>
  );
}
