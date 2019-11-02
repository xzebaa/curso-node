let opt = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}

const argv = require('yargs').
            command('listar', 'imprime en consola la tabla de multiplicar',opt)
            .command('crear', 'crea una tabla de multiplicar',opt)
            .help()
            .argv;
            
module.exports = {
    argv
}