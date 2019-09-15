var ws;

function connect() {
    var username = document.getElementById("username").value;
    
    var host = document.location.host;
    var pathname = document.location.pathname;
    
    //websocket client URI
    ws = new WebSocket("ws://" +host  + pathname + "chat/" + username);


    ws.onmessage = function(event) {
    var log = document.getElementById("log");
        console.log(event.data);
        var message = JSON.parse(event.data);
        log.innerHTML += message.from + " : " + message.content + "\n";
    };
}

//send message back to the client
function send() {
    var content = document.getElementById("msg").value;
    
    var json = JSON.stringify({
        "content":content
    });

    ws.send(json);
}