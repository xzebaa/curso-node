const { argv } = require('./config/yargs');
const colors = require('colors');

 const { crearArchivo, listar }  = require('./multiplicar/multiplicador')

let commando = argv._[0];

const crearTabla = () => {
    crearArchivo(argv.base, argv.limite)
    .then( (archivo) => console.log(`se ha creado el ${archivo}`))
    .catch( (error) => console.log( `error ${error}`));
}

const listarTabla = () => {
    let listaTabla = listar(argv.base,argv.limite);
    console.log(listaTabla);
}

switch (commando) {
    case 'listar':
        listarTabla();
        break;
    case 'crear':
        crearTabla()
        break;

    default: console.log('no se reconoce comando');
        break;
}

// console.log(process.argv);