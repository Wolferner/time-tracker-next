

const {JsonDB} = require('node-json-db')
const {Config} = require('node-json-db/dist/lib/JsonDBConfig')






const userDb = new JsonDB(new Config(`UserDB-1`, true, false, '/'))

const getJsonData = (  dataBase)=>{
    return userDb.getData(`/${dataBase}`)
}

const addJsonData = (  dataBase, data)=>{
    userDb.push(`/${dataBase}[]`,data)
}


const delJsonData = ( dataBase)=>{
    userDb.delete(`/${dataBase}`)
}

// userDb.push('/userTasks[]', )

// console.log('baza sozdana')

module.exports = {getJsonData, addJsonData, delJsonData, }



