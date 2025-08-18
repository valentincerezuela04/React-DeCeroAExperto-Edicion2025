import { GiphyResponseTs } from "../data/giphy.response";

const API_KEY = 'upTbYDihY4hEftcqEDlkqgNBifH4gbMd'

const request = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`)


const createImgInsideDOM = (url:string) => { 
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);
 }
request
.then( (response) => response.json())
// .then((data) => { 
//     const imageUrl = data.data.images.original.url;
//     console.log(imageUrl);

//     const img = document.createElement('img');
//     img.src = imageUrl;

//     document.body.append(img);
// })

.then((data:GiphyResponseTs) => { 
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);
    createImgInsideDOM(imageUrl);

})
.catch((err) => {
    console.error(err);
});