const socket = new WebSocket('ws://localhost:3000');

const button = document.querySelector('button');

const ul = document.querySelector('ul');
const input = document.querySelector('input');


const sendMessage = () => {

    if(input.value) {
        socket.send(input.value);
        input.value=""
    }
}

button.addEventListener('click', (e)=> {
    e.preventDefault();
    if(socket.readyState === 1) {
        sendMessage();
    }
    
});




socket.onmessage = (event) => {
    const li = document.createElement('li');
    li.textContent = event.data;
    ul.appendChild(li);
};

