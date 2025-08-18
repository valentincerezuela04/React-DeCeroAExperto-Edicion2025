import { GiphyResponseTs } from "../data/giphy.response";

const API_KEY = 'upTbYDihY4hEftcqEDlkqgNBifH4gbMd'

const request = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`)


const createImgInsideDOM = (url:string) => { 
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
 }

const getRandomGift = async () : Promise<string> => {
    const response = await request;
    const {data} :GiphyResponseTs= await response.json(); //|| await response.json() as const ,because we doesn't know type of return value in the promise

    return data.images.original.url;    
};

getRandomGift().then(createImgInsideDOM)