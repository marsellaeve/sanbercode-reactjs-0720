// Soal 1
console.log("// soal 1");
function halo(){
    return "Halo Sanbers!";
}
console.log(halo());

// Soal 2
console.log("\n// soal 2");
function kalikan(angka1,angka2){
    return angka1*angka2;
}
var num1 = 12;
var num2 = 4;
var hasilKali = kalikan(num1, num2);
console.log(hasilKali);

// Soal 3
console.log("\n// soal 3");
function introduce(name,age,address,hobby){
    return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!";
}
var name = "John";
var age = 30;
var address = "Jalan belum jadi";
var hobby = "Gaming";
var perkenalan = introduce(name, age, address, hobby);
console.log(perkenalan);