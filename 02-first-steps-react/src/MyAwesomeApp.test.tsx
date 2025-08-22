import { describe, test, expect } from "vitest";
import { render, screen } from '@testing-library/react';

import { MyAwesomeApp } from "./MyAwesomeApp";

describe('MyAwesomeApp', () => {
  test('should render firstName and lastName', () => {
    render(<MyAwesomeApp />);
    //console.log(container.innerHTML);
    //screen.debug(); //render all screen content of the component

    // const h1 = container.querySelector('h1');
    // const h2 = container.querySelector('h2');

    // expect(h1?.innerHTML).toContain('valentin');
    // expect(h2?.innerHTML).toContain('cerezuela');
    screen.debug();

    const h1 = screen.getByTestId('first-name-title');
    expect(h1.innerHTML).toContain('valentin');



  });

  test('should match snapshot', () => {
    const { container } = render(<MyAwesomeApp />);
    expect(container).toMatchSnapshot();
  });

  test('should match snapshot div', () => {
    expect(render(<MyAwesomeApp />)).toMatchSnapshot(); // can we pass directly render without use destructuration
  });

  test('should match snapshot div v2', () => {
    render(<MyAwesomeApp />);
    expect(screen.getByTestId('test-div')).toMatchSnapshot();
  });


});
