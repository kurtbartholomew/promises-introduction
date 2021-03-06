#An Introduction to Javascript Promises

This is a simple repo constructed for engineers wanting to understand the
reasons for promises and desiring the understanding to create their own
implementation of a Promise library

The accompanying Prezi presentation can be found [here](https://prezi.com/3cgxve4bcgoo/demystifying-promises/)

####Initial Steps for the using this repo

`npm install` to install dependencies

`npm install nodemon -g` to globally install [nodemon](https://github.com/remy/nodemon)

`npm start` to start up the node server

To have access to all of the solutions for this repo, add a remote for this repo

`git remote add upstream https://github.com/kurtbartholomew/promises-introduction.git`

After that, retrieve the branches by entering `git fetch upstream` and then `git branch -a` to view the available solution branches. Use `git checkout upstream/*insert solution branch name*` to work off a local copy

- - -

###Callback Creation

Initially pulling down the repo will give you a starting point to refactor
the existing function calls in `server/config/middleware.js` as well as the
existing funtions in `server/utils` to use callbacks.

Use the feedback from your server in your terminal to properly construct your
callbacks so you return 'broccoli' on the front end.

- - -

###Refactoring to Promises

You may proceed to the `callbacks finished` branch to start
refactoring callbacks using promises.

At this point, you should refactor the same functions and function calls using 
bluebird's promise creation capabilities

- - -

###(Optional) Refactoring to Promises with Bluebird's PromisifyAll

Use the `callbacks finished` branch and use [promisifyAll](https://github.com/petkaantonov/bluebird/blob/master/API.md#promisepromisifyallobject-target--object-options---object) keep your refactor
to two pages of edits

- - -

###(Solutions Branch) Compare the 3 different implementations all in one place

Checkout the `all-implementations-version` branch to see the callback implementation, Bluebird promise implementation, and Bluebird promisify all implementation. They can be found the `all-implementations folder`
