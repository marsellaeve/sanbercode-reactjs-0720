//soal 1
console.log("//soal 1");
const PI = 3.14;
var luasLingkaran = ()=>{
    let r = 7.0;
    return PI*r*r;
}
var kelilingLingkaran = ()=>{
    let d = 14.0;
    return PI*d;
}
var string=`Luas Lingkaran = ${luasLingkaran()}, Keliling Lingkaran = ${kelilingLingkaran()}`;
console.log(string);

//soal 2
console.log("//soal 2");
var addKata = (kata1,kata2,kata3,kata4,kata5)=>{
    let kalimat = "";
    kalimat=`${kata1} ${kata2} ${kata3} ${kata4} ${kata5}`;
    console.log(kalimat);
}
addKata("saya","adalah","seorang","frontend","developer");

//soal 3
console.log("//soal 3");
class Book {
    constructor(name, totalPage,price){
        this.name=name;
        this.totalPage=totalPage;
        this.price=price;
    }
}
class Komik extends Book{
    constructor(name,totalPage,price){
        super(name,totalPage,price);
        this.isColorful=true;
    }
}
var buku1 = new Book("Fis",100,1000);
var komik = new Komik("lala",10,100);
console.log("Nama Buku: "+buku1.name+", page: "+buku1.totalPage+", harga: "+buku1.price);
console.log("Nama Komik: "+komik.name+", page: "+komik.totalPage+", harga: "+komik.price);
