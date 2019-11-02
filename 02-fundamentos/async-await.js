/* 
let getNombre = async () => {
    throw new Error('Error de async forzado')
    return 'sebastian';
} */

let getNombre = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(`sebastiannn`);
        }, 2000);
        
    })
}

getNombre().then( (nombre) => {
    console.log(nombre);
}).catch( (error) => console.log(`error de async`,error ))

let saludo = async () => {
    let nombre = await getNombre();
    return `hola ${nombre}`;
}

saludo().then( (mensaje) => console.log(mensaje));