
if (process.env.NODE_ENV ==='production'){
    module.exports = require('./prod');

}else{
    modeule.exports = require('./dev');
    
}