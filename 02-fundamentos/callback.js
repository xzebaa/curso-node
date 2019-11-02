// setTimeout(()=>{console.log(`hola mundo`)},3000)

// let getUsuarioById = (id,callback)=>{
// let usuario ={
//     nombre:'seba',
//     id
//     }

//     callback(usuario)
// }    

// getUsuarioById(10,(usuario)=>{
//     console.log(`usuario de base de datos ${usuario}`);

// })

let empleadosBD = [
    {
        id: 1,
        salario: 2000,
        nombre: 'juan',
    },{
        id: 2,
        salario: 3000,
        nombre: 'algo',
    },{
        id: 3,
        salario: 20312300,
        nombre: 'otro',
    },{
        id: 4,
        salario: 201239899000,
        nombre: 'otromas',
    },
]

let getUSuarioById = ( id, callback ) => {

    const empleado = empleadosBD.find( ( empleado ) => empleado.id === id );

    if( !empleado )  return callback(`el usuariono no existe `)

    return callback(null, empleado);
    
};

let getsalario = ( empleadoFinf, callback) => {
    const empleado = empleadosBD.find( (empleado) => empleado.id ===empleadoFinf.id )
    if( !empleado ) return callback(`error de salario con usuario ${empleadoFinf.nombre}`);

    const usuarioSalario = {
        nombre: empleado.nombre,
        salario: empleado.salario,
    }

    callback(null, usuarioSalario);
};

const salary = (empleado) => {
    getsalario(empleado, (empleado, (err, salario) => {
        if( err ) return console.log(err);

        return console.log(salario);
    }))
}

getUSuarioById( 4 , ( err, usuario ) => {

    if( err ) return console.log(`error: ${err}`)
    
    console.log(usuario);

    salary(usuario);

})
