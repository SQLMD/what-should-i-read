# What the Heck Should I Read

This was created during my time as a student at Code Chrysalis.

A node/express application that displays a random book from the NYT bestseller list from the last ten years. [2009-07-1 until today]

## Getting Started

These instructions will get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You will need [Node.js](https://nodejs.org/) installed with a package manger such as [yarn](https://yarnpkg.com/lang/en/) and Docker installed if you want to take advantage of the docker files included.

### Installing

Run yarn to install all of the node module dependencies required by the application.

```
yarn
```

You will need an API key from [The New York Times Developer Network](http://developer.nytimes.com/signup).

Once you have you key, update [docker-compose.example](./docker-compose.example) and rename to docker-compose.yml

Run a yarn script to build the docker container. This script can be run when the container needs to be rebuilt.

```
yarn docker
```

If not using docker then run yarn start to run the application on port 3000.

```
yarn start
```

With either method you should now be able to view the application at http://localhost:3000/

## Built Using

* [Axios](https://github.com/axios/axios)
* [Express](https://expressjs.com/) - Back-end
* [Docker](https://www.docker.com/) - for future enhancements that will take advantage of a container

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Mike Donnelly** - [SQLMD](https://github.com/SQLMD)

See also the list of [contributors](https://github.com/SQLMD/what-should-i-read/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

In addition any use of this project must comply with the [NYT API Terms of Use](http://developer.nytimes.com/tou)

## Acknowledgments

* Thank you to [New York Times Developer Network](http://developer.nytimes.com/) for the over a decade of information on bestselling books
* Thank you to [Code Chrysalis](https://www.codechrysalis.io/), without you this project wouldn't exist.
