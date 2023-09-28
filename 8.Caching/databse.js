const database={
    ['index.html']:'<html>Anubhav is so great</html>'
}
module.exports.get=(key,callback)=>{
    setTimeout(()=>{
        callback(database[key]);
    },5000)
}