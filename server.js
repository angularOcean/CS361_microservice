const zmq = require("zeromq")

let returnDict = {
    distance:"Distance Image URL",
    speed: "Speed Image URL",
    pace: "Pace Image URL"  
}

async function run() {
  const sock = new zmq.Reply

  await sock.bind("tcp://127.0.0.1:3000")
  console.log("Server bound to port 3000")

  for await (const [msg] of sock) {
    //Check if message is in return dict
    if (msg in returnDict) {
        console.log(`Recieved message from client "${msg}", returning image`)
        await sock.send(returnDict[msg])
    }
    //Handle invalid request
    else {
        console.log(`Recieved message from client: "${msg}", Error: Invalid request message`)
        await sock.send(`Invalid request: ${msg}`)
    }
    }
    
  }

run()