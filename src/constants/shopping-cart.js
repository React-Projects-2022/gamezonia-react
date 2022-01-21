const PRODUCTS = [
  {
    id: "3558",
    img: "https://media.rawg.io/media/games/d2f/d2f925d2c1518d45c45f91cc32afce68.jpg",
    name: "Assassin's Creed Freedom Cry",
    rating: { value: 3.02, count: 283 },
    description: "PlayStation 4",
    qty: 7,
    price: 38.35,
    stock: 471,
  },
  {
    id: "5259",
    img: "https://media.rawg.io/media/games/0df/0df3e72c789c89f7e29fe776acb40cfa.jpg",
    name: "OlliOlli",
    rating: { value: 4.02, count: 34 },
    description: "Xbox One",
    qty: 3,
    price: 83.29,
    stock: 23,
  },
];

const getTotalSubTotal = () => {
    let total = 0;
    let subtotal = 0;
    // eslint-disable-next-line array-callback-return
    PRODUCTS.map ((product) => {
        subtotal = subtotal + product.qty;
        total = total + (product.qty * product.price)
    })
    return [total, subtotal]
}
export const SHOPING_CART_MOCK = {
  total: getTotalSubTotal[0],
  subtotal: getTotalSubTotal[1],
  products: PRODUCTS,
};
