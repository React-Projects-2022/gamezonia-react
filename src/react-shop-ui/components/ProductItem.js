import "./../styles/product-item.css"
export const ProducItem = ({ item }) => {
    // https://bbbootstrap.com/snippets/product-card-template-hover-effect-and-animation-23224168
    console.log(item);
    const productItem = item;
  
    const showDetails = () => {
      console.log(productItem);
    };
    return (
      <>
        {" "}
        {item ? (
          <div className="card">
            <div className="heart">
              {" "}
              <i className="fa fa-heart"></i>{" "}
            </div>
            <div className="top-div">
              <div className="border">
                {" "}
                <img src={productItem.product.img} alt="" />{" "}
              </div>{" "}
              <span>{productItem.price} €</span>
            </div>
            <div className="bottom-div">
              <h5 className="truncate-one-line">{productItem.product.name}</h5>
              <p>{ (productItem.product.description ? productItem.product.description : "")}</p>
            </div>
            <div className="last-section">
              <div className="last-div">
                {" "}
                <i className="fa fa-shopping-bag"></i>{" "}
                <i className="fa fa-comment-o"></i>{" "}
              </div>
              <div className="buttons">
                {" "}
                <button onClick={() => showDetails()}>Add to cart</button>{" "}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </>
    );
  };