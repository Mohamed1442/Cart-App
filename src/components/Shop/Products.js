import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: "item1",
    title: "Test1",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "item2",
    title: "Test2",
    price: 10,
    description: "This is a second product - awesome!",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            title={item.title}
            price={item.price}
            description={item.description}
            id={item.id}
            key={item.id}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
