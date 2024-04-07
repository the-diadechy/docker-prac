Implementing Node.js + Docker + Tailscale server 
=====

This is a simple node.js server working within a Docker container that is exposed to the LAN via Tailscale. \

* Node.js is used for running server-side environment. In this case a webserver.
* Docker is a service platform that allows for os virtualization "Containers" which isolate any coding environment passed to it. The Docker Engine is the specific technology that connects client to server. The server is handled by the daemon dockerd.
* Tailscale is a vpn service that allows you to connect multiple devices into one network with the benefit of encrypted end-to-end connection via WireGuard. Devices can now communicate "locally" without being exposed or hosted on the internet.

```
const hostname = os.networkInterfaces().tailscale0[0].address
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
```
*I get the tailscale ip from the node object 'os'* 

## The Dockerfile
**The Dockerfile within the project will:**
* node:18-alpine is the base Alpine linux image with the node package
* it will be built in the /app folder
* Everything within docker-prac will be copied into /app
* Once the container starts, "node cindy.js" will be passed to the cli
* And finally the container will be using port 3000

## Docker Build Instructions
* First the image will be built using buildx
`docker buildx build -t cindy . `
*-t gives the tag cindy*
*Will build the image using the current directory*
* Create the Container from the image
` docker run -d --network host cindy `
*-d detaches the container allowing the container to run in the background and freeing the terminal.*
*--network host puts the container onto the host pc network.*
* Navigating to http://100.90.203.29:3000/ on any device connected with my Tailscale network will have access to this node server. 
