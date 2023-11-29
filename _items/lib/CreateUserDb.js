const { JsonDB } = require('node-json-db');
const { Config } = require('node-json-db/dist/lib/JsonDBConfig');


const careateUserDataBase = (userName, userPassword)=>{
    const db = new JsonDB(new Config(`${userName}DB`, true, false, '/'))
    try{
        db.getData(`/${userName}`)
        console.log(`baza dla ${userName} uzhe sushestvuet`)
    }catch(error){
        
    }
}