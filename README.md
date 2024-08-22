# Welcome to the Challenge!

Download the repo. Npm install. Npm start. 


# Files

**App.tsx** is the main file to start. 

Folder 'api' is your api response mock data.
- Use '/src/api/**people.js**'.   

**Person** folder holds the component where you will render people. '/src/person/**render-person.tsx**'


## Goals

Reference the screen shot 'Screen Shot 2023-02-07 at 6.19.53 PM.png'

- Render the 'render-person' component in App.jsx and pass the data from people.js into the component as props. render-person is already setup to accept specific props ( you may change the name ), but you will need to fix a problem that comes up when the data doesn't quite match the expected type.
- Render each property from a person on the screen as seen in the screen shot. 
- Put first name and last name in different divs, but render them in one line, using flex, as seen in the screenshot

- Add an input to each person's section. 
	- When you type in more than 5 characters, it will create an alert with a message. 
- 