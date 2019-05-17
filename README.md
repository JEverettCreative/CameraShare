# CameraShare - ProjectTwo

## Contributors
@JEverettCreative
@redSW20
@chrissalvado

## Technology
- HTML5, CSS, Bootstrap
- Javascript, jQuery, BootstrapTour, PassportJS, Google oAuth
- Node.js, Express.js, MySQL, Sequelize

## About
- Second group project for the Vanderbilt Coding Bootcamp. In the film and photography industries, great gear is both a necessity and often very expensive. CameraShare aims to tackle this issue by creating a platform for Users to rent gear directly from others within the industry at cheaper prices than a full purchase or going through a production house, as well as rent out their own gear when not in use. Essentially, it's an AirBnB model approach to gear rentals.

Upon loading, the app will prompt a login using Google oAuth. Ultimately, all functionality will be restricted to authorized and authenticated users. On the Rentals page, currently 4 categories exist. Clicking any category will call on the MySQL database using Sequelize to pull all items available for rent and display them on the page. The User can then add an item to their cart for checkout. (Note: As of this version, items are not yet added to the Cart. The Cart page is currently hard-coded for demo.)

Posting a new rental currently is as simple as filling out a small form, which will then create a new item in the MySQL database. Future iterations will include calendar functions (likely from Google Calendar) that will allow the User to set available dates for said rental, which will be compared against requests from Renters. 

## License
- None

## How to use this code
- Open the app in the deployed Heroku environment listed below. For now, you can click outside of the modal to ignore Google login. Dummy account will be incorporated in a future version alongside greater functionality.

## Deployed Project
https://gentle-thicket-10059.herokuapp.com/
  
## Contact
@JEverettCreative
- e-mail: jonathan@jonathaneverettcreative.com
- LinkedIn: https://www.linkedin.com/in/jonathan-everett-64725435/

@redSW20

@chrissalvado
