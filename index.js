/*const http = require('http');

http.createServer((req, res)=>{
  res.end('Hello World');
}).listen(3000);*/

//instanciar express
const express= require('express');
// adiciono middlewares de otros

// creo aue no va const morgan = require('morgan');
const ejs = require('ejs');
const app = express();

//settings
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views');
//http://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'ejs');
//middlewares
app.use(morgan('short'));
/*
app.use(morgan('dev'));
app.use(function(req, res, next){
  console.log('request url:' + req.url);
  next();
});*/
//Pero no funciona, para usar el Middleware hacer app.use();
//Y agrego next para que continue el flujo a las rutas
app.use((req, res, next) => {
  console.log('Ha pasado por la funcion ');
  next();
});

//mi servidor aap es inicializado en el puerto 3000, ruta inicial: /
app.get('/', (req, res) => {
  //res.end('Hello World');
  res.render('views/index.ejs');
  /*
  res es lo que enviq el servidor
objeto JSON o require
{
  "header": ""
}
  */
});

/*Agrego ruta*/
app.get('/login', (req, res) =>{
  res.end('Aqui va el login');
});

//rutas que no existen voto un mensaje de error

app.get('*', (req, res) =>{
  res.end('Escriba bn la ruta ole!');
});


app.listen(3000, function(){
  console.log('servidor funcionando!');
  console.log('Nombre de la app: ', app.get('appName'));
});
