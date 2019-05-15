setTimeout(()=>{console.log(`hola mundo`)},3000)

let getUsuarioById = (id,callback)=>{
let usuario ={
    nombre:'seba',
    id
    }

    callback(usuario)
}    

getUsuarioById(10,(usuario)=>{
    console.log(`usuario de base de datos ${usuario}`);

})