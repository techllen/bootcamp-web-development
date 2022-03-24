//testing
console.log("connected to js");

//changing default name to another name
function changeName(){
    document.querySelector(".description h1").innerHTML = "Nyangige Mwita";
}

//remove an element from the webpage
function removeConnectionRequest(){
    document.querySelector(".connection-request-content-member").remove();
}

//adding number of connections and reducing number of connections request
function addConnectionCount(){
    //convert all existing connections from the webpage to int
    var existingConnections = parseInt(document.querySelector(".connections-count span").innerHTML);
    //add all existing connections to the new one
    existingConnections+=1;
    //displaying the number of new connections
    document.querySelector(".connections-count span").innerHTML = existingConnections;

    decreaseConnectionRequests();
}

function decreaseConnectionRequests(){
    //converting all connections request from webpage to in
    var existingConnectionRequest = parseInt(document.querySelector(".connection-request-count span").innerHTML);
    //reducing number of connection request by one
    existingConnectionRequest-=1;
    //displaying number of new connections request
    document.querySelector(".connection-request-count span").innerHTML = existingConnectionRequest;
}