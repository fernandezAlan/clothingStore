import CartIcon from "../../../components/Icons/CartIcon";

export default function ProductDetail() {
  return (
    <div className={"w-screen flex mt-10 h-screen-80"}>
      <section className={"w-1/2 flex flex-col items-center"}>
        <h1 className={"text-2xl"}>
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h1>
        <img
          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          className={"w-1/3 mt-10"}
        />
        <div className={"h-16 flex m-10"}>
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            className={"w-16 mx-2"}
          />
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            className={"w-16 opacity-50 mx-2"}
          />
          <img
            src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
            className={"w-16 opacity-50 mx-2"}
          />
        </div>
      </section>
      <section className={"w-1/3 h-4/5 flex flex-col justify-between"}>
        <div>
          <strong className={"text-3xl"}>$109.95 USD</strong>
          <span className={"line-through ml-3 text-slate-600"}>$150 USD</span>
        </div>
        <p className={"text-slate-600"}>
          Your perfect pack for everyday use and walks in the forest. Stash your
          laptop (up to 15 inches) in the padded sleeve, your everyday
        </p>
        <div className={"flex align-middle"}>
          <span>sizes:</span>
          <button className={"text-sm w-8 h-8  ml-2 rounded-full bg-slate-200"}>
            XS
          </button>
          <button
            className={
              "text-sm w-8 h-8 rounded-full ml-2 border-black border-2 bg-black text-white"
            }
          >
            S
          </button>
          <button
            className={"text-sm w-8 h-8  ml-2  rounded-full bg-slate-200"}
          >
            L
          </button>
          <button className={"text-sm w-8 h-8 ml-2  rounded-full bg-slate-200"}>
            XL
          </button>
        </div>
        <div className={"flex align-middle"}>
          <span>colors:</span>
          <button
            className={
              "w-8 h-8 bg-blue-500 ml-2 rounded-full border-black border-2"
            }
          ></button>
          <button className={"w-8 h-8 bg-red-500 ml-2 rounded-full"}></button>
          <button
            className={"w-8 h-8 bg-orange-500 ml-2 rounded-full"}
          ></button>
          <button
            className={"w-8 h-8 bg-yellow-500 ml-2 rounded-full"}
          ></button>
        </div>
        <div className={"flex justify-between"}>
          <div className={"flex"}>
            <span>quantity:</span>
            <div className={"w-24 flex justify-between ml-2"}>
              <button className={"text-sm w-8 h-8 rounded-full bg-slate-200"}>
                -
              </button>
              <span>1</span>
              <button className={"text-sm w-8 h-8 rounded-full bg-slate-200"}>
                +
              </button>
            </div>
          </div>
          <span>
            total:<strong>$109.95 USD </strong>
          </span>
        </div>
        <button
          className={
            "bg-black text-white px-3 py-1 rounded flex w-36 justify-between"
          }
        >
          Add to cart
          <CartIcon />
        </button>
      </section>
    </div>
  );
}
