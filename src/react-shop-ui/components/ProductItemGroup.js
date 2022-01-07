import { ProducItem } from "./ProductItem";
import PropTypes from "prop-types";

const ProductItemGroup = ({ title, products, showDetails, addCart, showDesc }) => (
  <>
    <h2>{title}</h2>
    <hr />
    <div className="row row-cols-1 row-cols-md-4 g-4">
      {products.map((item) => (
        <div key={item.id} className="col">
          <ProducItem item={item} showDetails={showDetails} addCart={addCart} showDesc={showDesc} />
        </div>
      ))}
    </div>
    <hr />
  </>
);

export { ProductItemGroup };

ProductItemGroup.propTypes = {
  title: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired,
  showDetails: PropTypes.func.isRequired,
  addCart: PropTypes.func.isRequired,
};
