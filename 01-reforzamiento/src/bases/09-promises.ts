const myPromise = new Promise<number>((resolve,reject) => {
    setTimeout(() => { 
        //resolve(100);
        reject('reject');

     },2000);
}); 


myPromise
.then((myMoney) =>{
    console.log(`i have my money  : ${myMoney}`); 
})
.catch((reason) => {
    console.warn(reason);
})
.finally(() => { 
    console.log('this is a finally');
});