# NFT-assignment

<!--  -->
Firstly Install all necessary packages by using 
npm i

<!--  -->
Start Server by using 
npm start

<!--  -->
Run apis
using specific Urls 
first use login api to generate token by username and password which is mentioned in route.js file using /login 
then 

<!--  -->
CREATE API FOR NFT
use http://localhost:3000/nfts ,hence its a post request so you have to enter data in request body and fields are present in model.js file and it is protected api so you have
to enter token in bearer token header.

<!--  -->
GET API FOR NFTS
use http://localhost:3000/nfts ,this gives all nfts data collections which are present in database, and it is protected api so you have
to enter token in bearer token header.

<!--  -->
GET NFT BY ID
use http://localhost:3000/nfts/:id ,using this url you can get a specific document by its unique it and its a object id , and it is protected api so you have
to enter token in bearer token header.

<!--  -->
UPDATE API FOR NFT
use http://localhost:3000/nfts/:id ,using this url you can update or change according to your need a specific document by its unique object id, and it is protected api 
so you have to enter token in bearer token header for authentication and authorization purpose.

<!--  -->
DELETE API FOR NFT
use http://localhost:3000/nfts/:id ,using this url you can delete a specific document by its unique object id from the database, and it is protected api 
so you have to enter token in bearer token header for authentication and authorization purpose.


