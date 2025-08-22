import { render, screen } from "@testing-library/react"
import { FistStepsApp } from "./FirstStepsApp"

//simulating ItemCounter

const mockItemCounter = vi.fn((props: unknown) => {
    return <div data-testid="ItemCounter"></div>
})

vi.mock("./shopping-cart/ItemCounter", () => ({
    ItemCounter: (props: any) => mockItemCounter(props),
}))

// vi.mock('./shopping-cart/ItemCounter', () => ({
//     ItemCounter: (props: unknown) => <div
//         data-testid="ItemCounter"
//         name={props.name}
//         quantity={props.quantity}
//     ></div>
// }));



describe('FirstStepsApp', () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    test('should match snapshot', () => {
        expect(render(<FistStepsApp />)).toMatchSnapshot();
    });

    test('should render the correct of Itemcounter components', () => {
        render(<FistStepsApp />);

        const intemCounters = screen.getAllByTestId('ItemCounter');

        expect(intemCounters.length).toBe(3);

        //screen.debug();

    });

    test('should render itemCounter with correct props', () => {
        render(<FistStepsApp />);
        expect(mockItemCounter).toHaveBeenCalledTimes(3);
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Nintendo switch 2", quantity: 1
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Super smash", quantity: 2
        });
        expect(mockItemCounter).toHaveBeenCalledWith({
            name: "Mario World", quantity: 3
        });
    });
})