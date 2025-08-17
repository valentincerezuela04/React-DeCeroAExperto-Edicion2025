export interface Heroo{
    id: number;
    name: string;
    owner: Owner;
}

//type Owner = "DC"| "Marvel"; //basically is a enum like in Java
enum Owner{
  DC = 'DC', //0 by default without a assign value
  Marvel ='Marvel', //1
}

export const heroes: Heroo[] = [
    {
      id: 1,
      name: 'Batman',
      owner: Owner.DC,
    },
    {
      id: 2,
      name: 'SpiderMan',
      owner: Owner.Marvel,
    },
    {
      id: 3,
      name: 'Superman',
      owner: Owner.DC,
    },
    {
      id: 4,
      name: 'Flash',
      owner: Owner.DC,
    },
    {
      id: 5,
      name: 'Wolverine',
      owner: Owner.Marvel,
    },
    {
      id:5,
      name: 'Green Lantern',
      owner: Owner.DC,
    }
  ];