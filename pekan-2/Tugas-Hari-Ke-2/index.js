// di index.js
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

// Tulis code untuk memanggil function readBooks di sini
//SOAL 1
console.log("//soal 1");
function panggil(time,i){
    readBooks(time,books[i],function(check){
        if(check>0){
            i++;
            var length=books.length;
            if(i<length){
                time=check;
                panggil(check,i);
            }
            else{
                console.log("Buku habis");
            }
        }
        else{
            console.log("Waktu habis");
        }
    });
}
panggil(10000,0);