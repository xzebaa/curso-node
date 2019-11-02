const fs = require('fs');
let maximoMultiplo = 10;

const crearArchivo = async (base, limite = 10) => {

    return new Promise( (resolve, reject) => {
        if( !Number(base) )
        reject(`no es un numero`);
    
        let dataTabla = listar(base,limite);
        
        const data = new Uint8Array(Buffer.from(dataTabla));
        
        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`el archivo tabla-${base}.txt a sido guardado`.green); 
        }); 
    })  
}

const listar = (base, limite = 10) => {
    let dataTabla = '';

    console.log('============'.green);
    console.log(`===listar tabla ${base}====`.green);
    console.log('============'.green);
    for (let multiplicador = 1; multiplicador <= limite; multiplicador++) {
        dataTabla += `${base} x ${multiplicador} = ${multiplicador*base} \n`;    
    };

    return dataTabla;
}

module.exports = {
    crearArchivo,
    listar,
}

// const crearArchivo = async (base) => {
    
//     if( !Number(base) )
//     throw new Error(`no es un numero`);

//     for (let multiplicador = 1; multiplicador <= maximoMultiplo; multiplicador++) {
//         dataTabla += `${base} x ${multiplicador} = ${multiplicador*base} \n`;    
//     }
    
//     const data = new Uint8Array(Buffer.from(dataTabla));
    
//     fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
//         if (err) throw err;
//         return `el archivo tabla-${base}.txt a sido guardado`;
//     });
// }