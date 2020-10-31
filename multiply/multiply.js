const fs=require('fs');
const { resolve } = require('path');
const { number } = require('yargs');

//here i Created a promise
let CreateFile=(base)=>{

    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject(`Doesn't is a number`);
            return;
        }

        let data='';

        for(let i=1;i<=10;i++){
            data+=`${base} * ${i} = ${base*i}  \n `
        }

        fs.writeFile(`tables/table-${base}.txt`,data,(err)=>{
            if(err){
                reject(err);
            }else{
                resolve(`table-${base}`)
            }
        })

    })
    


}

//create a method to print table

let ListaTable=(base,limit)=>{
    return new Promise((resolve,reject)=>{
        if(!Number(base)){
            reject(` ${base} doesn't a number`)
            return;
        }

        if(!Number(limit)){
            reject(`${limit} doesn't a number`);
return;
        }

        let data='';
        for(let i=1;i<=limit;i++){
            data+=` ${i} * ${base} = ${base*i} \n`;
        }

        resolve(data);

    })
}
//  I'have to export modele

module.exports={
    CreateFile,
    ListaTable
}