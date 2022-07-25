# CS361_microservice
This repo contains code for an image retrieval microservice designed a partner's project in OSU CS361.

## Description
This microservice establishes a two way communication link between two programs using a socket bound to a specific localhost port (localhost:3000 by default). The microservice is coded in node.js using the ZeroMQ (https://zeromq.org/) embeddable networking library. 

### This repo contains two main files:
- server.js which recieves requests from a client program or computer and sends back data based on the content of the request. 
- client.js which provides a template example for how a program can set up a connection to the socket and send requests to the server and recieve data back from it. 

## Requesting Data
Data is sent exclusively using a socket connection for this microservice. Once a socket connection is established to the same port as the server (i.e. both server and client are connected to localhost:3000) an asyncrhonous message can be sent to the service in the form of a string. The server recognizes three string requests: 'distance', 'speed', and 'pace' and has a prepared response to each of those. Any other type of string or message will be met with an error message stating the request was invalid. 

## Receiving Data
Receiving data functions similarily to sending data to the microservice. Once the socket connection has been established and a request sent the client should await a reply from the server and expect to receive one in the form of a string reply. The string reply will either be an error message if the request was invalid or a string message specific to the request passed. The string should be the URL path of an image relevant to the request. 

## UML Sequence Diagram
The following diagram displays how the client and server are expected to interact for this microservice. 
[UML diagram](uml2.JPG)

## Installation
Download the files from this repo and run "npm install" in the package directory 

## How to run
Once downloaded and installed the service can be run from the terminal with "node server.js". The complementing client.js program can similarily be run with "node client.js"  
