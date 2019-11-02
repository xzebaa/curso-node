
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
];

let getEmpleados = (id) => {
    return new Promise( (resolve, reject) => {
        let empleado = empleadosBD.find( (empleado) => empleado.id===id)
        if( !empleado ) reject(`erro al buscar empleado`);
        else {resolve(empleado)}
    })
}

let getSalario = (empleado) => {

    return new Promise( (reject, resolve ) => {
        let salarioEmpelado = empleadosBD.find( (empleadoItem) => empleadoItem.id===empleado.id)
        if( !salarioEmpelado ) reject(`error al buscar salario`);
        else {resolve({ name: salarioEmpelado.nombre, salario: salarioEmpelado.salario})}       
    })
}


/* 
getEmpleados(1).then( (empleado) => {
    console.log(`empleado de bd `, empleado);
    
    getSalario(empleado).then( (empleado) => {
        console.log(`empleado de bd `, empleado);
    }, (error) => console.log(error))

}, (error) => console.log(error)) */

getEmpleados(1).then( (empleado) => {
    console.log(`empleado de bd `, empleado);
    return getSalario(empleado)
}).then ( (salario) => {
    console.log(salario);
}).catch( (error) => console.log(error));


