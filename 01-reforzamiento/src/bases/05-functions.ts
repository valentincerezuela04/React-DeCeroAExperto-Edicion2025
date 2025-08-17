function greet(name:string) :string{ //:string is the type of return ,if we don't set it will return
    return `Hello ${name}`;        //a value of type of that value
  
};

const greet2 = (name:string):string => `Hello ${name}`;





const message = greet('Goku');
console.log(message);


const message2 = greet('Vegeta');
console.log(message2);

interface User{
    uid: number,
    name:string
}


function getUser():User{
    return {
        uid:123,
        name:'kevin'
    }
}

const getUser2 = () =>({
        uid:123,
        name:'bob'
});

console.log(getUser);
console.log(getUser2);

const myNumbers :number[] = [1,2,3,4,5];

myNumbers.forEach(function (value) {
    console.log({value});
});

myNumbers.forEach((value) => {console.log({value});});

myNumbers.forEach(console.log);