const person = {
    name: 'Tony',
    age : 45,
    key : 'IronMan'
};

// const { name,age,key} = person;

// console.log({name,age,key});

interface Hero{
    name: string,
    age: number,
    key: string,
    rank?: string, //the same : rank : string | undefined
}

const useContext = ({key,name,age,rank = 'without rank'}:Hero) => { //rank = 'without rank' default value for undefined rank
    return{
        KeyName: key,
        person:{
            name,
            age
        },
        rank:rank,

    };
};

// const context = useContext(person)
// console.log(context);

// const {rank,
//     KeyName,
//     person:{ name:personName }} = useContext(person);
// console.log({rank,KeyName})


