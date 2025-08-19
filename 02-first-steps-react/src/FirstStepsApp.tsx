import { ItemCounter } from "./shopping-cart/ItemCounter";


interface ItemInCart {
  productName: string,
  quantity: number,
};

const products: ItemInCart[] = [
  { productName: "Nintendo switch 2", quantity: 1 },
  { productName: "Super smash", quantity: 2 },
  { productName: "Mario World", quantity: 3 },
]

export const FistStepsApp = () => {
  return (
    <>
      <h1>shopping cart</h1>

      {
        products.map((item) => (
          <ItemCounter key={item.productName} name={item.productName} quantity={item.quantity} />
        ))
      }
      {/* <ItemCounter name="Nintendo switch 2" quantity={1} />
      <ItemCounter name="Super smash" quantity={2} />
      <ItemCounter name="Mario Worlds" quantity={3} /> */}

    </>
  );
};