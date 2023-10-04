import app from './app';

app.get('/hello', (req, res) => {
    res.send({
        message: 'working'
    })
})

app.listen(8080, function(){
    console.log("API en cours d'exécution sur le port 8080");
});
