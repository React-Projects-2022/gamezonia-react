import { useQuery } from "@apollo/client";
import { HOME_PAGE } from "../../graphql/operations/query/home-page";
import { ProducItem } from "../../react-shop-ui";
const Home = () => {
  const { loading, error, data } = useQuery(HOME_PAGE);

  if (loading) return <div>Loading...</div>;
  if (error) return <p>Error :(</p>;
  console.log(data);

  document.title = "Gamezonia - Home";
  return (
    <>
      <h1>Home</h1>
      {!loading && !error ? (
        data.carousel.shopProducts.map((item) => (
          <p key={item.id}>{item.product.name}</p>
        ))
      ) : (
        <p>No data</p>
      )}
      <ProducItem />
      <h2>PC</h2>
      <hr/>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {!loading && !error ? (
          data.pc.shopProducts.map((item) => (
            <div key={item.id} className="col">
              <ProducItem item={item} />
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>
      <h2>Playstation 4</h2>
      <hr/>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {!loading && !error ? (
          data.ps4.shopProducts.map((item) => (
            <div key={item.id} className="col">
              <ProducItem item={item} />
            </div>
          ))
        ) : (
          <p>No data</p>
        )}
      </div>

      <h2>35 € o menos</h2>
      <hr/>
      <div className="row row-cols-1 row-cols-md-4 g-4">
      {!loading && !error ? (
        data.topPrice35.shopProducts.map((item) => (
          <div key={item.id} className="col">
              <ProducItem item={item} />
            </div>
        ))
      ) : (
        <p>No data</p>
      )}
      </div>
    </>
  );
};

export default Home;

