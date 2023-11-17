

const {getJsonData , addJsonData, delJsonData} = require('@/DataBase/node-json-db')

from

const getData = (dataBaseName, dataBase,) =>{
    try{
        if(dataBaseName === 'node-json-db'){
            return getJsonData(dataBase)
        }else{
            console.log('Need to use argument dataBaseName : getData( dataBaseName, dataBase )')
        }

    }catch(error){
        console.log(error)
    }
}

const addData = (dataBaseName, dataBase, Data) =>{
    try{
        if(dataBaseName === 'node-json-db'){
            return addJsonData(dataBase, Data)
        }else{
            console.log('Need to use argument dataBaseName : getData( dataBaseName, dataBase )')
        }

    }catch(error){
        console.log(error)
    }
}

const delData = (dataBaseName, dataBase) =>{
    try{
        if(dataBaseName === 'node-json-db'){
            return delJsonData(dataBase)
        }else{
            console.log('Need to use argument dataBaseName : getData( dataBaseName, dataBase )')
        }

    }catch(error){
        console.log(error)
    }
}

module.exports = {getData, addData, delData}


