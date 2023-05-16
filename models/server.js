// para que muestre las variables que estan en .env
require('dotenv').config();


const express = require('express')
const cors = require('cors');
const { socketController } = require('../sockets/controller');



 class Server{
    constructor(){
        this.app    = express();
        this.port   = process.env.PORT;
        //el server que se debe levantar 
        this.server = require('http').createServer(this.app);
        //aqui esta toda la info de los clientes conectados 
        this.io     = require('socket.io')(this.server);

        
        this.paths={}       
          
        //middlewares
        this.middlewares();
        //Rutas de mi aplicacion 
        this.routes();

        //configuracion de sockets 
        this.sockets();
        
    }

       middlewares(){
        //CORS Se recomienda siempre usarlo 
        this.app.use(cors());

        //Directorio Publico 
        this.app.use(express.static('public'));

        //Fileupload - carga de archivos
       
    }

     
      
    routes(){
    //  this.app.use(this.paths.usuarios,   require('../routes/usuarios.js'));
    
   }
    sockets(){
      this.io.on('connection', socketController);
    }

     listen(){
    
        this.server.listen(this.port, ()=>{
        console.log('Servidor corriendo en puerto = ',this.port)
        })
      }
   }

module.exports=Server;