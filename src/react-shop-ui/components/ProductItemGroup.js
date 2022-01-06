import { ProducItem } from "./ProductItem";

const ProductItemGroup = ({ title, products, showDetails, addCart }) => (
  <>
    <h2>{title}</h2>
    <hr />
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.map((item) => (
        <div key={item.id} className="col">
          <ProducItem item={item} showDetails={showDetails} addCart={addCart} />
        </div>
      ))}
    </div>
    <hr />
  </>
);

export { ProductItemGroup };
