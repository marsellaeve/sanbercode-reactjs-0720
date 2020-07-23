// Soal 1
console.log('// soal 1');
console.log('LOOPING PERTAMA');
var i=0;
while(i<=18){
    i+=2;
    console.log(i + " - I love coding");
}
console.log('LOOPING KEDUA');
while(i>0){
    console.log(i + " - I love coding");
    i-=2;
}

// Soal 2
console.log('\n// soal 2');
for (var i=1; i<=20 ; i++){
    if(i%2==1){
        if(i%3==0) console.log(i+" - I Love Coding");
        else console.log(i+" - Santai");
    }
    else if(i%2==0){
        console.log(i+" - Berkualitas");
    }
}

// Soal 3
console.log('\n// soal 3');
var pagar='#';
var tambah='#';
for(var a=0;a<7;a++){
    pagar='#'
    for(var b=1;b<=a;b++){
        pagar=pagar.concat(tambah);
    }
    console.log(pagar);
}

// Soal 4
console.log('\n// soal 4');
var kalimat="saya sangat senang belajar javascript"
console.log(kalimat.split(" "));

// Soal 5
console.log('\n// soal 5');
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort();
var i=0;
var jumlah=daftarBuah.length;
while(jumlah--){
    console.log(daftarBuah[i]);
    i++;
}