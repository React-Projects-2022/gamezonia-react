import { useQuery } from "@apollo/client";
import Loading from "../../components/core/Loading";
import { HOME_PAGE } from "../../graphql/operations/query/home-page";
import { ProducItem } from "../../react-shop-ui";
const Home = () => {
  const { loading, error, data } = useQuery(HOME_PAGE);

  document.title = "Gamezonia - Home";
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          <h1>Home</h1>
          {data.carousel.shopProducts.map((item) => (
            <p key={item.id}>{item.product.name}</p>
          ))}
          <h2>PC</h2>
          <hr />
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {data.pc.shopProducts.map((item) => (
              <div key={item.id} className="col">
                <ProducItem item={item} />
              </div>
            ))}
          </div>
          <hr />
          <h2>Playstation 4</h2>
          <hr />
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {data.ps4.shopProducts.map((item) => (
              <div key={item.id} className="col">
                <ProducItem item={item} />
              </div>
            ))}
          </div>
          <hr />
          <h2>35 € o menos</h2>
          <hr />
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {data.topPrice35.shopProducts.map((item) => (
              <div key={item.id} className="col">
                <ProducItem item={item} />
              </div>
            ))}
          </div>
          <hr />
        </>
      )}
    </>
  );
};

export default Home;
