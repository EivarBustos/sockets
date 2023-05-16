//referencias de html 
const lblOnline = document.querySelector('#lblOnline');
const lblOffline= document.querySelector('#lblOffline');
const txtMensaje= document.querySelector('#txtMensaje');
const btnEnviar= document.querySelector('#btnEnviar');

const socket = io();

socket.on('connect', ()=>{
    // console.log('Conectado');
    lblOffline.style.display = 'none';
    lblOnline.style.display ='';
});

socket.on('disconnect', ()=>{
    // console.log('Desconectado del servidor');
    lblOffline.style.display = '';
    lblOnline.style.display ='none';
});
socket.on('enviar-mensaje', (payload)=>{
    console.log(payload)
})





//enviar un mensaje desde el fron -end hasta el backend 
btnEnviar.addEventListener('click', ()=>{
    const mensaje = txtMensaje.value;
    const payload ={
        mensaje,
        id: '123456',
        fecha: new Date().getTime()

    }
    //enviarle un msj al servidor =)
    socket.emit('enviar-mensaje', payload, (id)=>{
        console.log('desde el server', id)
    })
});
