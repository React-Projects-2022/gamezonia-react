import { navigateTo } from "../../helpers/navigate";
import "./../styles/product-item.css";
import { Rating } from "./Rating";
export const ProducItem = ({ item }) => {
  // https://bbbootstrap.com/snippets/product-card-template-hover-effect-and-animation-23224168
  console.log(item);
  const productItem = item;

  const showDetails = () => {
    console.log(productItem);
  };
  return (
    <>
      {item ? (
        <div className="card">
          <div className="heart">
            <i className="fa fa-heart"></i>
          </div>
          <div className="top-div">
            <div className="border">
              <img src={productItem.product.img} alt="" />
            </div>
            <span>{productItem.price} €</span>
          </div>
          <div className="bottom-div">
            <h5 className="truncate-one-line">{productItem.product.name}</h5>
            <p>
              {productItem.product.description
                ? productItem.product.description
                : ""}
            </p>
            <Rating
              max={5}
              ratingItem={{
                value: productItem.product.rating.value,
                count: productItem.product.rating.count,
              }}
            />
          </div>
          <div className="last-section text-center">
            <div className="buttons">
              <button
                onClick={() => {
                  navigateTo('details', productItem.id);
                }}
                title="Go to game more details"
              >
                <i className="fas fa-info-circle"></i>
              </button>
              &nbsp;
              <button onClick={() => console.log("Add to cart")} title="Add to cart">
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
