

const socketController = (socket) => { 

    console.log('cliente conectado', socket.id);
    //desconectado
     socket.on('disconnect', ()=>{
    console.log('Cliente desconectado', socket.id);
     });
     socket.on('enviar-mensaje', (payload, callback)=>{
       // console.log(payload)

       const id = 123456789;
       callback({id});


       //Enviar un msj a todos los cllientes conectados
       socket.broadcast.emit('enviar-mensaje', payload)
     })
  }

module.exports={
    socketController
}