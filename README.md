## Description

The web app consist of:

- node.js server, which will listen for POST requests accepting generated puzzle hashes
- web app (webpack / react) that takes user's public key and generates puzzle hashes calculated from user's public key using JacobianPoint - fromHexG1 function

## Production

Generate docker image:

> docker build .

The web app will be listening on port 9090.
