import { heroes,type Heroo } from "../data/heroes.data"


const getHeroById = (id :number): Heroo|undefined => { 
    heroes.forEach(console.log);

    const hero = heroes.find((hero) => { 
        return hero.id === id;
      })

    // with this we can take out undefined 
    //  if(!hero){
    //     throw new Error(`dont exist any hero with id = ${id}`);
    //  }
    
     return hero;
    
 }

 console.log(getHeroById(1));
 