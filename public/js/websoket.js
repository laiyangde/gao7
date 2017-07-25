    var socket = io.connect('ws://'+'192.168.1.39'), //与服务器进行连接
        button = document.getElementById('sendBtn');
    button.onclick = function() {
        socket.emit('test', 'hello'); //发送一个名为foo的事件，并且传递一个字符串数据‘hello’
    }