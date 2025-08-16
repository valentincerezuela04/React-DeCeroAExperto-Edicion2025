function greet(name:string) :string{ //:string is the type of return ,if we don't set it will return
    return `Hello ${name}`;        //a value of type of that value
  
};

const greet2 = (name:string):string =>  {
    return `Hello ${name}`;
};




const message = greet('Goku');
console.log(message);


const message2 = greet('Vegeta');
console.log(message2);


function getUser(){
    return {
        uid:123,
        name:'kevin'
    }
}

const getUser2 = () =>{
    return {
        uid:123,
        name:'bob'

    }
}

console.log(getUser);
console.log(getUser2);
