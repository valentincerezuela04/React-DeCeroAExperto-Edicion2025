import { ItemCounter } from "./shopping-cart/ItemCounter";

export const FistStepsApp = () => {
  return (
    <>
      <h1>shopping cart</h1>
      <ItemCounter name="Nintendo switch 2" quantity={1} />
      <ItemCounter name="Super smash" quantity={2} />
      <ItemCounter name="Mario Worlds" quantity={3} />

    </>
  );
};