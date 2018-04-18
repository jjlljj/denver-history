# Historic Denver

Get to know Denver's history and architecture through a 3D map tour of buildings on the National Register of Historic Places. 

## Learning Goals
We wanted to make an application that served information from an API that Nora built with open data from the City of Denver. We also wanted to learn about mapping libraries and geolocation. We decided to use Mapbox GL, a free and highly customizable library that extrapolates 2D maps into 3D space. 

## Tech Stack
#### Front End
* React
* Redux 
* Router
* CSS Animations
* Mapbox GL
* Threejs 
* Threebox
* Complete testing suite in Jest & Enzyme
* [Deployed on Surge](http://historicdenver.surge.sh)

#### Back End
* Node / Express
* Postgres / SQL Database
* Knex SQL library
* JSON Web Token Authentication
* [Travis CI](http://travis-ci.org/nogully/denver-history)
* Complete testing suite in Mocha & ChaiHTTP
* [Deployed on Heroku](http://denver-history.herokuapp.com)
* [API Documentation](http://github.com/nogully/denver-history)

## Content
Data was scraped from: 
* Data and geolocation: [Denver Open Data](https://www.denvergov.org/opendata)
* Photos: [Denver Public Library Western History Collection](http://digital.denverlibrary.org/) *Images subject to copyright and used without permission.*   
* Descriptions: [Wikipedia](http://wikipedia.org)

## Future Plans
* Add more buildings to tour
* Add 3D renderings of buildings to the map
* Apply historic photos as textures to 3D buildings
* This application is a **work-in-progress** so please check back again! 

## To Use This Repo
1. From the command line, clone down this repo `git clone [this url]`
2. Install the dependencies: `cd denver-history && npm install`
3. Get an API key from [Mapbox](http://mapbox.com) and save it in a file called `.key.js` in the `src` directory as: 
```
export const MB_TOKEN = 'that.string.you.got.from.mapbox'
```
4. Have fun! 



