# relist

A simple React application written for trainings at [itemis](https://www.itemis.com/en/).

## installation

First install node 10. I would use [nvm](https://github.com/creationix/nvm). A simple `nvm install v10.14.2` should do the trick.

Then checkout this repo and run `npm install` to download all dependencies.

## running

You can run the project with `npm start`. If you navigate to `http://localhost:8080/` you should see the Application.

## developing

I recommend running `npm start` in one terminal. It will automatically recompile and reload the Application on file chnages. So you can have a Browser running your current state all the time. And in another console tab I have `npm test`. This will run jest in watch mode. It will watch for file changes and run affected tests.

There is also a linter (`npm run lint`) and a formatter (`npm run format`). [Here](https://prettier.io/docs/en/editors.html) is a guide to integrate the formatter in your editor. I recommend Visual Studio Code.
