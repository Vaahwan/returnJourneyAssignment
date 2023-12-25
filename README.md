# returnJourneyAssignment

# How to run on local machine
1) First clone the repository
2) Then install all packages by running this command
   "npm install"
# How to check every tasks
## Task 1
node Task1.js

## Task 2
node Task2.js

## Task 3
node Task3.js

## Task 4
node Task4.js
Now, you can run below given API endpoint on thunderClint or nodemon, (please un-comment app.listen part)
### GET /products/
make a GET request on localhost:3050/products
initially you will get a empty array and if you have added something then you will get all the products

### GET /products/:id
make a GET request on localhost:3050/products/id
If given id exist then you will get details of specific product otherwise will get 404 error "product not found"

### POST /products/
make a POST request on localhost:3050/products
It will expect a object data in body the object should be something like this
{
   "productName" : "somethiing",
   "productPrice" : 20
}
This will add a new product in product array

### PUT /products/:id
make a PUT request on localhost:3050/products/id
It will expect a object data in body the object should be something like this
{
   "productName" : "somethiing",
   "productPrice" : 20
}
If given id exist then you will get details of updated product otherwise will get 404 error "product not found"

### DELETE /products/:id 
make a DELETE request on localhost:3050/products/id
If given id exist then you will get details of deleted product otherwise will get 404 error "product not found"

## Task 5
node Task5.js
Now, you can send any request on localhost:3000/ on thunderclint or nodemon
Whenever you will make request in console you will get following details
timeStamp
HTTP method
requested URL

## Task 6
This is test file for Task4.js. To run this first install jest and then you can run this command
npx jest Task6.test.js
You can see all the test cases getting passed
