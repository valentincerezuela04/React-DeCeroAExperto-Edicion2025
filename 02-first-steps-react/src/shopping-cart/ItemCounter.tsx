import React from 'react'


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
    console.log(quantity);
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginTop: 10,
        }}>
            <span>{name}</span>
            <button>+1</button>
            <span style={{ color: '#fefefe' }}>{quantity}</span>
            <button>-1</button>
        </section>
    );
};
