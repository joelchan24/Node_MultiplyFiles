let opt={
    base:{
        demand:true,
        alias:'b'
    },limite:{
        default:10,
        alias:'l'
    }
}

const argv=require('yargs').command('listar','imprime en consola tabla de multiplicar',opt).command('crear','crear file en consola tabla de tabla de multiplicar',opt).argv;


module.exports={
    argv
}