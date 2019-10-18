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
Second group project for the Vanderbilt Coding Bootcamp. In the film and photography industries, great gear is both a necessity and often very expensive. CameraShare aims to tackle this issue by creating a platform for Users to rent gear directly from others within the industry at cheaper prices than a full purchase or going through a production house, as well as rent out their own gear when not in use. Essentially, it's an AirBnB model approach to gear rentals.

Upon loading, the app will prompt a login using Google oAuth. Ultimately, all functionality will be restricted to authorized and authenticated users. On the Rentals page, currently 4 categories exist. Clicking any category will call on the MySQL database using Sequelize to pull all items available for rent and display them on the page. The User can then add an item to their cart for checkout. (Note: As of this version, items are not yet added to the Cart. The Cart page is currently hard-coded for demo.)

Posting a new rental currently is as simple as filling out a small form, which will then create a new item in the MySQL database. Future iterations will include calendar functions (likely from Google Calendar) that will allow the User to set available dates for said rental, which will be compared against requests from Renters. 

## License
- None

## Screenshots
* Landing on the homepage will open a modal prompting oAuth login w/ Google
![OAuthModal](https://user-images.githubusercontent.com/45632983/67115859-c5faf680-f1a4-11e9-848b-f7f7324e8972.png)

* Navigating to the Rentals page will present a set of categories to choose from
![RentalPage](https://user-images.githubusercontent.com/45632983/67115978-0b1f2880-f1a5-11e9-8713-2124c6978c96.png)

* Selecting a category will populate items listed in the database
![ItemForLease](https://user-images.githubusercontent.com/45632983/67116421-fc854100-f1a5-11e9-85ba-fbc10a35dca0.png)

* Clicking Lease Me will add the item and take you to your cart
![Cart](https://user-images.githubusercontent.com/45632983/67116759-bed4e800-f1a6-11e9-9739-fe0780b0aafb.png)

* New items can be listed on the List page
![Listing](https://user-images.githubusercontent.com/45632983/67116874-f479d100-f1a6-11e9-857c-a73d86329758.png)

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
