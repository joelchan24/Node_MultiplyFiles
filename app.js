//i have to import multuply
// here i used destructure 
const { arch } = require('process');
const {CreateFile,ListaTable}=require('./multiply/multiply');
const { argv}=require('./config/yargs');
const colors = require('colors');

//i sill user yargs


//argv


 console.log(argv);

let command=argv._[0];
switch(command){
    case 'listar':
       console.log(colors.rainbow( `Colors tabla ${argv.base}`));
        ListaTable(argv.base,argv.limite).then(data=>console.log(colors.green( data))).catch(err=>console.log(err));
        break;
    case 'crear':
        let base=argv.base;
        CreateFile(base).then(archivo=> console.log(`file created ${archivo}`)).catch(e=>console.log(e));
        break;
    default:
        console.log("Command not recognized")    
}


//
