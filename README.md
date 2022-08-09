**Overview**

This project detects user-agent information from the user and uses it as a seed to generate an avatar.

**File Structure**

The project is structured as follows:

1. The src folder contains all the source code for the project.

2. Inside the src folder, there are two folders: assets and components. The components folder contains the NavBar component which includes the code for the navigation bar and the UserAgent component which has the code for the data and avatar fetched from the APIs. The assets folder contains the CSS folder which holds the file for the styling used for the project and an images folder to holds any images used in the application. 

3. The App.js file under the src folder is the file for App Component. App Component is the main component in React which acts as a container for all other components. 

**Libraries Used** 

1. https://www.apicagent.com/ - user-agent lookup API that detects Browser, OS, Device Type, and other attributes from user-agent.

2. https://avatars.dicebear.com/ - a free avatar library for designers and developers.

**How to Run the project**

1. Navigate to the project directory as follows

- cd user-agent-project

2. Install npm packages using the npm install command

3. Run the project using npm start. This runs the app in the development mode.

4. Open http://localhost:3000 to view it in your browser.

**Things to note**

When testing with the Lighthouse extension the project may not properly fetch the unique user agent information data specified in the code and it displays a type error on the specific data. 




