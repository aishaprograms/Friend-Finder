# Friend-Finder
This Node-based app that uses Express for its front-end. It matches friends based on a compatibility survey.

It is made up of two parts: 1) A front-end set of HTML/CSS/JS pages for entering and viewing data and 2) A back-end composed of Node/Express and basic JS for storing, updating, and relaying reservation data.

## Technologies used
- Node.js
- Express

## Getting Started
Visit the Heroku app:

* **Friend-Finder** - [Friend-Finder](https://secure-gorge-77527.herokuapp.com/)

## Understand
The server-side code uses set of routes that then display this data as JSONs. Users are given these JSONs if they visit the appropriate page (i.e. if a user visits localhost:PORT/api/friends they see a JSON of table data).

server.js file includes a USE STATIC route to the app/public directory for routing to the css and js folders

htmlRoutes.js file includes two routes:
```
A GET Route to /survey which displays the survey page
A default USE route that leads to home.html which displays the home page
```

apiRoutes.js file includes two routes:
```
A GET route with the url /api/friends. This displays a JSON of all possible friends
A POST routes /api/friends. This handles incoming survey results and the compatibility logic
```

Compatability is determined to find the match for the user who has the lowest difference in scores.
Example:
User 1: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
User 2: [3, 2, 6, 4, 5, 1, 2, 5, 4, 1]
Total Difference: 2 + 1 + 2 = 5


### Prerequisites

What to install and how for local development and testing purposes (included in package.json file)

```
- node.js: visit node.js and download...
- express npm
- body-parser npm
- path npm
```

## Default test (included in package.json file)

The default test to run the local server is
```
node server.js
```

## Built With

* SublimeText

## Authors

* **Aisha Ahmad** - [Aisha Ahmad](https://github.com/aishaprograms)

