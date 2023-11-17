

const {JsonDB} = require('node-json-db')
const {Config} = require('node-json-db/dist/lib/JsonDBConfig')
const { useEffect } = require('react')

const tasksDb =new JsonDB(new Config('TasksDB', true, false, '/'))
const settingsDb = new JsonDB(new Config('SettingsDB', true, false, '/'))
const usersDb = new JsonDB(new Config('UsersDB', true, false, '/'))
const projectsDb = new JsonDB(new Config('ProjectsDB', true, false, '/'))
const clientsDb = new JsonDB(new Config('ClientsDB', true, false, '/'))
const tagsDb = new JsonDB(new Config('TagsDB', true, false, '/'))

const getJsonData = ( dataBase, data)=>{
    return dataBase.getData(data)
}

const addJsonData = ( dataBase, path, data)=>{
    dataBase.push(path,data)
}

const delJsonData = ( dataBase)=>{
    dataBase.delete(dataBase)
}

usersDb.push('/test1',{user:'asdasdas', id:'asdsadsadasddsa', age:45})

module.exports = {getJsonData, addJsonData, delJsonData}



