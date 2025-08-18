const characterNames = ['Goku','vegeta','gohan'];

// const [p1,p2] = characterNames;
//const [,p2] = characterNames; //  for destructuring second element (why this we can alo usee [p1,p2,p3] and just use the variable that we need,but this use unnecessary memory space)
const [,,p3] = characterNames; // third one


console.log({p3});

const returnsArrayFn = () => {
    return['abc',123] as const; //this mean the first value is always string , and second one is a number
}

const [letters, numbers] = returnsArrayFn();


console.log(letters,numbers);
console.log({letters,numbers}); //Instead of writing { letters: letters, numbers: numbers }, JavaScript lets you just write { letters, numbers }.

//exercise Link>>>(https://gist.github.com/Klerith/6db6ce73a652e3a5639673adc9be7895)

const useState = (value :string)  => {
    return [value,(newValue:string) => {console.log((newValue));}] as const
}

const [namee, setName] = useState('Goku');
console.log(namee);      
setName('Vegeta'); 
console.log(namee);
