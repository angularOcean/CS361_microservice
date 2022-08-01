
//Client service to connect to server through socket
const zmq = require("zeromq")


const sendList = ['distance', 'speed', 'pace']

async function runClient(inputStr) {

  const sock = new zmq.Request

  sock.connect("tcp://127.0.0.1:3000")
  console.log("Client bound to port 3000")
  
  let recieveList = [];

  //Single request passed by function
  console.log(`Sending ${inputStr} request`);
  await sock.send(inputStr);
  const recievedResult = await sock.receive();
  console.log('Received message from server:', recievedResult.toString());

  //Multiple test requests 
  /*
  for (let i = 0; i < 3; i++) {
    console.log('Sending request ', i);
    await sock.send(sendList[i]);
    const [result] = await sock.receive();
    console.log('Received ', result.toString(), i);
    recieveList[i]=result.toString()
  }
  recieveList.forEach(function(entry) {
    console.log(entry);
  });
*/
}

runClient("test")
runClient("distance")
runClient("pace")
runClient("speed")