const socket = new WebSocket('ws://localhost:5000');

const button = document.querySelector('button').addEventListener('click', (e) => {
    e.preventDefault();

    if(socket.readyState === 1) {
        const input = document.querySelector('input');
        if(input.value) {
            socket.send(input.value);
            input.value = '';
        }
    };
})




//receive response from the server

socket.onmessage = (event) => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.innerText = event.data;
    ul.appendChild(li);
};


