


// Understanding prime numbers
/*let sayı=Number(prompt("sayı gir:"));
let check=true;
for(let i=2;i<sayı/2;i++){
    if(sayı%i==0){
       check=false;
    }
}
if(check==0){
    alert(sayı+""+" Asal Sayı Değil");
}
else {
    alert(sayı+""+"Asal");
}*/

//Finding a factor of a number .5!=120 like
/*
let number= Number(prompt("Enter a number"));
let result=1;
for(let i=1;i<=number;i++){
    result*=i;

}
alert(result);*/

//Finding armstrong numbers
/// 153 = 1*1*1 +5*5*5+3*3*3
/*
let number = Number(prompt("Enter a Number"));
let stringNumber=number.toString();
let basamak = 1;
let sonuc = 0;
let rakam = 0;
let j = 0;
for (let i = 0; i < stringNumber.length; i++) {
  rakam = Number(stringNumber.charAt(i));
  j = 0;
  while (j < stringNumber.length) {
    basamak *= rakam;
    j++;
  }
  sonuc += basamak;
  basamak = 1;
}
if (sonuc == number) {
  alert("Armstrong Number");
} else {
  alert("Not an armstrong number");
}
*/
//Harften kaç tane olduğunu bulma 
/*
let metin="Kaç tane harf var acaba istediğinden?";
let harf=prompt("Bir harf gir:");
let sonuc=harfbul(harf);
alert("Bu harften bu kadar var:"+sonuc);

function harfbul(harf){
  let toplam=0;
  for(let i=0;i<metin.length;i++){
    if(metin.charAt(i).toLowerCase()===harf.toLowerCase()){
      toplam+=1;
    }
    
}
return toplam;
}
*/
// Mükemmel sayıları tespit etme
let sayı=Number(prompt("Bir sayı giriniz:"));
let a=0;
for(let i=1;i<sayı;i++){
  if(sayı%i==0){
   a+=i;
  }
}
if(a==sayı){
  alert("yes");
}
else{
  alert("no");
}