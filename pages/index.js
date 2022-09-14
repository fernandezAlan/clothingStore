import Card from "../components/Card";

function HomePage({ products }) {
  console.log("products", products);
  return (
    <>
      <section className={"grid grid-cols-4 my-20 gap-y-28 px-10"}>
        {products.map((pr) => (
          <Card
            title={pr.title}
            image={pr.image}
            price={pr.price}
            description={pr.description}
          />
        ))}
      </section>
    </>
  );
}

export default HomePage;

export async function getStaticProps(context) {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return {
    props: {
      products: data.filter(
        (pr) =>
          pr.category === "men's clothing" || pr.category === "women's clothing"
      ),
    }, // will be passed to the page component as props
  };
}
