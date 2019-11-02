
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

let getEmpleados = async (id) => {
    let empleado = empleadosBD.find( (empleado) => empleado.id===id)
    if( !empleado ) throw new Error(`erro al buscar empleado`);
    else {
        return empleado;
    } 
}

let getSalario = async (empleado) => {

    let salarioEmpelado = empleadosBD.find( (empleadoItem) => empleadoItem.id===empleado.id)
    if( !salarioEmpelado ) throw new Error(`error al buscar salario`);
    else {return { name: salarioEmpelado.nombre, salario: salarioEmpelado.salario}}
}

const consultaEmpleado = async (id) => {
    try {
        const empleado = await getEmpleados(id);
        const { salario } = await getSalario(empleado);
        console.log(`el salario es ${salario}`,empleado);      
    } catch (error) {
        console.log(`ERROR CONSULTA EMPLEADO: `,error);  
    }
}

consultaEmpleado(4);


/* 
getEmpleados(1).then( (empleado) => {
    console.log(`empleado de bd `, empleado);
    
    getSalario(empleado).then( (empleado) => {
        console.log(`empleado de bd `, empleado);
    }, (error) => console.log(error))

}, (error) => console.log(error)) */

/* getEmpleados(1).then( (empleado) => {
    console.log(`empleado de bd `, empleado);
    return getSalario(empleado)
}).then ( (salario) => {
    console.log(salario);
}).catch( (error) => console.log(error)); */


