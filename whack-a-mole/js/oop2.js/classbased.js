class Kendaraan{
    constructor(warna){
        this.warna = warna;
    }
}

class corola extends Kendaraan{
 constructor(warna){
     super(warna);
 }   
}

let mobil1 = new corola('hijau');
console.log(mobil1.warna);
