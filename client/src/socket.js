import io from 'socket.io-client';

const socket = io.connect();
socket.emit('start');

export default socket;