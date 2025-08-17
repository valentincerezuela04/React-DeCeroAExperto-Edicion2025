const API_KEY = 'upTbYDihY4hEftcqEDlkqgNBifH4gbMd'

const request = fetch(`https://api.giphy.com/v1/stickers/random?api_key=${API_KEY}`)

request
.then( (response) => response.json())
.then((data) => { 
    const imageUrl = data.data.images.original.url;
    console.log(imageUrl);

    const img = document.createElement('img');
    img.src = imageUrl;

    document.body.append(img);
})
.catch((err) => {
    console.error(err);
});