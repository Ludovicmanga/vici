import app from './index';

const server = app.listen(3000, function(){
    console.log("API en cours d'exécution sur le port 3000");
});

console.log(server, ' is the server')