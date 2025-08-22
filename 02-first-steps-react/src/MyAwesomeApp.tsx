import type { CSSProperties } from "react";

const firstName: string = 'valentin';
const lastName: string = 'cerezuela';

const favoriteGmaes: string[] = ['The Last of us', 'LOL', 'Elden Ring'];
const isActive = false;

const address = {
    zipCode: 'abc213',
    country: 'Canada',
};


const myStyles: CSSProperties = { //why CSSProperties ?? without this property we dont have autocomplete ,because visualStudioCode detected like a regular object
    backgroundColor: '#fafafa',
    borderRadius: 1,
    padding: 10

}

export const MyAwesomeApp = () => {
    return (
        <>
            <div data-testid="test-div">
                <h1 data-testid="first-name-title">{firstName}</h1>
                <h2>{lastName}</h2>
                <p>{favoriteGmaes.join(' ,')}</p>
                <p>{2 + 2}</p>
                <h1>{isActive ? 'active' : 'Not active'}</h1>

                <p style={myStyles}>
                    {JSON.stringify(address)}</p>
                <p>Hoal com o es que e</p>

            </div>
        </>
    );
};