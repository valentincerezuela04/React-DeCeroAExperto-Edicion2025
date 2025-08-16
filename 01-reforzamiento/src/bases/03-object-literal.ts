const person = {
    name: 'Tony',
    lastName: 'stark',
    age: 45,
    address:{
        postalCode:'ABC123',
        city:'texas'
    }
};

//we can't use object like this:

// person = {
//     name: 'Peter',
//     lastName: 'parker',
//     age: 45
// };
//the only way is define the object like a let type (but is't a good practice)

//instead (we should use objects with const ):

const spiderMan = structuredClone(person);
spiderMan.name = 'peter';
spiderMan.lastName = 'parker';
spiderMan.address.city = 'New York';

//const spiderMan = {...person}; making a copy like this works but ,does't work if we have another object inside another
//because when we modify spiderman.addres.city to New York the city atribute in person would change to new york
//so basically we don't want that so instead wue should make a copy with structuredClone(person)



console.log(person,spiderMan)