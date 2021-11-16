Project Instructions:
1.Please install node modules using "npm install"
2."npm start" to run the project
3. "node "server-file-path"" to run the server (myCarsApp/server/apiserver/server.js')
4."npm test -- --coverage" to run test coverage report.



Project Flow:
Makes Page:
1.It displays list of makes available
2.User can search for a particular make in search box, then select "view model" button 
3.It will move to next page (Model page) which will display the available models for that particular make.
4. For instance, search "Ford" in the text box then select "view model
"button, it will move to models page which shows list of models for "Ford"

Models Page:
1.It displays list of models available for chosen make in previous page.
2.User can search for a particular model in search box, then select "view vehicles" button
3.It will move to next page (vehicles page) which will display the available vehicles for that particular make-model match.
3.For instance, search "Fiesta" in the text box then select "view vehicles" button, it will move to vehicles page that show list of vehicles for "Ford"-"Fiesta" combo.

Vehicles Page:
1.It displays list of Vehicles available for chosen make-model in previous page.
2.User can use "ADD VEHICLE" button to choose particular vehicle and it will move to "my details" page where user can see the added vehicle.

Details Page:
1.Displays list of added vehicles from previous section.
2. User has provision to delete added vehicle item by item or clear the entire vehicles list by using "CLEAR VEHICLES" button at the top.

Nav Bar:
User can navigate for car makes and my details to see list of added vehicles

State Management:
I Have used Redux along with thunk middleware.

DRY principle has been followed throughout,have made reusable components. Coding standards and architecture are thoroughly followed while developing





