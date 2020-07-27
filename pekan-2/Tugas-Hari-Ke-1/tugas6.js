//soal 1
console.log("// soal 1");
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var arrayDaftarPeserta = { nama: "Asep",
                           "jenis kelamin" : "laki-laki",
                           hobi: "baca buku" ,
                           "tahun lahir": 1992};
console.debug(arrayDaftarPeserta);
//soal 2
console.log("// soal 2");
var arrayDaftarBuah = [{nama:"strawberry",warna:"merah","ada bijinya":"tidak",harga:9000},
                    {nama:"jeruk",warna:"oranye","ada bijinya":"ada",harga:8000},
                    {nama:"Semangka",warna:"Hijau & Merah","ada bijinya":"ada",harga:10000},
                    {nama:"Pisang",warna:"Kuning","ada bijinya":"tidak",harga:5000}];
console.log(arrayDaftarBuah[0]);

//soal 3
console.log("// soal 3");
var dataFilm = [];
var i=0;
function funcDataFilm(nama,durasi,genre,tahun){
    dataFilm[i]={"nama":nama,"durasi":durasi,"genre":genre,"tahun":tahun};
    i++;
}
funcDataFilm("Aladdin","2 jam 8 menit","Romance",2019);
funcDataFilm("Lion King","2 jam","Animasi",2019);
funcDataFilm("Brave","1 jam 40 menit","Animasi",2012);
console.debug(dataFilm);

//soal 4
console.log("//soal 4");
class Animal {
    constructor(name){
        this.name=name;
        this.legs=4;
        this.cold_blooded=false;
    }
}
var sheep = new Animal("shaun");
console.log(sheep.name) 
console.log(sheep.legs) 
console.log(sheep.cold_blooded) 

class Ape extends Animal{
    constructor(name){
        super(name);
        this.legs=2;
    }
    yell(){
        console.log('Auooo');
    }
}
class Frog extends Animal{
    constructor(name){
        super(name);
    }
    jump(){
        console.log('hop hop');
    }
}
var sungokong = new Ape("kera sakti")
// console.log(sungokong.name) 
// console.log(sungokong.legs) 
// console.log(sungokong.cold_blooded) 
sungokong.yell() 
 
var kodok = new Frog("buduk")
// console.log(kodok.name) 
// console.log(kodok.legs) 
// console.log(kodok.cold_blooded) 
kodok.jump() 

//soal 5
console.log("//soal 5");
class Clock{
    constructor({ template }){
        this.template=template;
    }
    render() {
      var date = new Date();
      var hours = date.getHours();
      if (hours < 10) hours = '0' + hours;
      var mins = date.getMinutes();
      if (mins < 10) mins = '0' + mins;
      var secs = date.getSeconds();
      if (secs < 10) secs = '0' + secs;
      var output = this.template
        .replace('h', hours)
        .replace('m', mins)
        .replace('s', secs);
      console.log(output);
    }
    stop() {
      clearInterval(this.timer);
    }
  
    start() {   
      this.render();
      this.timer = setInterval(()=>this.render(), 1000);
    }
  }
  
  var clock = new Clock({template: 'h:m:s'});
  clock.start();  

  