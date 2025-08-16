interface Person{
    name:string,
    lastName:string,
    age:number,
    address : Address //? is a optional object
}

interface Address{
    postalCode:string,
    city:string
}


const ironMan: Person = {
    name: 'Tony',
    lastName: 'stark',
    age: 45,
    address:{
        postalCode:'ABC123',
        city:'texas'
    }
};


// if we use optional address "?" we can define an object like this >

// const hulk : Person = {
//     name: "Hulk",
//     lastName: "Hulk",
//     age: 0,

// }

//we can't use object like this:

// ironMan = {
//     name: 'Peter',
//     lastName: 'parker',
//     age: 45
// };
//the only way is define the object like a let type (but is't a good practice)

//instead (we should use objects with const ):

const spiderMan = structuredClone(ironMan);
spiderMan.name = 'peter';
spiderMan.lastName = 'parker';
spiderMan.address.city = 'New York';

//const spiderMan = {...ironMan}; making a copy like this works but ,does't work if we have another object inside another
//because when we modify spiderMan.address.city to New York the city atribute in ironMan would change to new york
//so basically we don't want that so instead wue should make a copy with structuredClone(ironMan)



console.log(ironMan,spiderMan);