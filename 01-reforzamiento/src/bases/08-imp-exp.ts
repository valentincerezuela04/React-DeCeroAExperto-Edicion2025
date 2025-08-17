// Use import for things that exist at runtime.
// Use import type for types/interfaces that only exist at compile-time.

import { heroes,type Heroo, Owner } from "../data/heroes.data"



const getHeroById = (id :number): Heroo|undefined => { 
    //heroes.forEach(console.log);

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

  export const getHeroesByOwner = (owner:Owner): Heroo[] =>{
    const arHeroes = heroes.filter(h => h.owner === owner);
    return arHeroes;
 }


//   export const getHeroesByOwner = (owner:Owner) =>{
//     heroes.filter((h) => h.owner === owner);
   
//  }
 