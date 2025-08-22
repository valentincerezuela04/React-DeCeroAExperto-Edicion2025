import { fireEvent, render, screen } from "@testing-library/react"
import { ItemCounter } from "../ItemCounter"

describe('ItemCounter', () => {
    test('should render with default values', () => {
        const nameTest = "Test name";
        render(<ItemCounter name={nameTest} />);
        //screen.debug();
        expect(screen.getByText(nameTest)).toBeDefined();
        expect(screen.getByText(nameTest)).not.toBeNull();

    })


    // test('should render with custum quantity', () => {
    //     const nameTest = "Test name";
    //     const quantity = 10;
    //     render(<ItemCounter name={nameTest} quantity={quantity} />);
    //     //screen.debug();
    //     expect(screen.getByText(quantity.toString())).toBeDefined();


    // })

    test('should inscrese count when +1 button is pressed', () => {
        render(<ItemCounter name={'Test item'} quantity={1} />);

        const [buttonAdd] = screen.getAllByRole('button');
        console.log(buttonAdd);

        fireEvent.click(buttonAdd); //simulating an event

        expect(screen.getByText('2')).toBeDefined();

    })



    test('should decrese count when -1 button is pressed', () => {
        //quantity 5
        render(<ItemCounter name={'Test item'} quantity={5} />);

        const [, buttonLess] = screen.getAllByRole('button');
        console.log(buttonLess);

        fireEvent.click(buttonLess); //simulating an event

        expect(screen.getByText('4')).toBeDefined();

    })


    test('should not decrese count when -1 button is pressed and quantity is 1', () => {
        //quantity 1
        render(<ItemCounter name={'Test item'} quantity={1} />);

        const [, buttonLess] = screen.getAllByRole('button');
        console.log(buttonLess);

        fireEvent.click(buttonLess); //simulating an event

        expect(screen.getByText('0')).toBeDefined();

    });
    test('should change to red when count is 1', () => {


        render(<ItemCounter name={'Test item'} quantity={1} />);
        const itemText = screen.getByText('Test item');
        console.log(itemText.style);

        expect(itemText.style.color).toBe('red');

    })



    test('should change to black when count is 2', () => {


        render(<ItemCounter name={'Test item'} quantity={2} />);
        const itemText = screen.getByText('Test item');
        console.log(itemText.style);

        expect(itemText.style.color).toBe('black');

    })



});