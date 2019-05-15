// function sumOld(a,b){
//     return a+b;
// }

// let sum= (a,b)=>a+b;

// console.log(sum(1,1));

// let saludar=()=> `hola mundo`

// console.log(saludar());

// let saludar1=nombre=> `hola ${nombre}`

// console.log(saludar1('seba'));

let deadpool={
    nombre:'wade',
    apellido:'winston',
    poder:'regeneracion',
    getNombre(){
        return `${this.nombre} ${this.apellido} - poder: ${this.poder}`;
    }
}
console.log(deadpool.getNombre());