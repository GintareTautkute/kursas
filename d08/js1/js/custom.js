console.log("Pavyko!")
// kuriamas kintamasis - var,let,const (let,const naudoti)

let num = 6 + 4
let vsc = "Labas" // kabutes traktuoja kaip teksta, niekada nerasyti skaiciu viduje
let relationship = (vsc == num) //naudojame salygose
console.log(num + ' ' + vsc + ' , ' + relationship)

let vardas = "Jonas"
let pavarde = "Petraitis"
console.log(vardas + '  ' + pavarde)
console.log(`Mano vardas yra ${vardas}, o pavarde yra ${pavarde}`)

let tekstas = 'Pirmas'
console.log(tekstas.length)
console.log(tekstas.toUpperCase())
console.log(tekstas.toLowerCase())
console.log(tekstas.charAt(5)) //Javascript skaiciuojama nuo 0
console.log(tekstas.indexOf('s'))

tekstas='Cia gali buti jusu reklama!'
console.log(tekstas.replace('gali buti', 'yra'))
console.log(tekstas.substring(4,14)) //nuo vieno indekso iki antro indekso pradzios 
console.log(tekstas.substring(14))
console.log(tekstas.substr(4,9))

let x = 6.15
console.log(Math.round(x))
console.log(Math.ceil(x))
console.log(Math.floor(x))

let y = 5.8
let z = 9
console.log(Math.max(x, y, z))
console.log(Math.min(x, y, z))

let i = Math.random() * 50
console.log(Math.round(i))

let a = Math.floor(Math.random() * (26 - 16 + 1) + 16) //* (max - min + 1) + min // skaicius nuo 16 iki 26
console.log(a)

if ( y === z) {
    console.log('lygus skaiciai')
} else {
    console.log('nelygus skaiciai')
}

let num1 = 1 // deklaruotas skaicius
while(num1 <= 10) { //salyga
    console.log(num1) // procesas kaip gauti
    num1++
}

for (let c = 1; c <=10; c++) {
    console.log(c)
}

// 1+2+3+4+5+6+7+8+9+10=50
let suma = 0 
for (let b = 1; b <= 10; b ++){
    suma += b
}
console.log(suma)

let s = 0
let skaiciai =[10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
for (let i=0; i < skaiciai.length; i++){
    s += skaiciai [i]
}
console.log(s)




