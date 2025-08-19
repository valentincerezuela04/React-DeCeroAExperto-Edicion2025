import React, { useState } from 'react'


interface Props {
    name: string,
    quantity?: number,  //number | undefined,

};

// export const ItemCounter = (props: Props) => {
//     return (
//         <section style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: 10,
//             marginTop: 10,
//         }}>
//             <button>+1</button>
//             <span style={{ width: 150, }}>{props.name}</span>
//             <button>-1</button>
//         </section>
//     );
// };

//destructuring version :




export const ItemCounter = ({ name, quantity }: Props) => {
    const [count, setCount] = useState(0);

    const handleAdd = () => {
        setCount(count + 1);
    };

    const handleSubstract = () => {
        if (count <= 0) {
            throw new Error("it can't be a negative number ");
        }

        setCount(count - 1);
    }

    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
        }}>
            <span>{name}</span>
            <button onClick={handleAdd}>+1</button>
            <span style={{ color: '#fefefe' }}>{count}</span>
            <button onClick={handleSubstract}>-1</button>
        </section>
    );
};
