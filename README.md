# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### requirement document link
https://docs.google.com/document/d/11T_5xFi1N_7vzKgldaYVi5fMpx8LPVRK8AAJwqIw8I0/edit


#####below

Mobile /Web Developer Task

Overview
Create an application that replicates the Order Book, Ticker widgets functionality from the Trading page of the Bitfinex website/mobile app.
https://www.bitfinex.com/trading

Ticker
The ticker is a small widget that shows the current trade pair, 24 hours volume, 24 hours price change in percents, and last price for that pair.



Order Book
Similarly to the book from the mobile, the created Order Book should have the ability to change precision of the price column, and to change scaling of the depth bars. Price alerts management and layout configuration features are not required.





General Requirements
All of the widgets should conceptually be the same as the corresponding widgets on the Bitfinex mobile app or the website. They should show the data in real-time and should have the ability to recover after a lost network connection. Add some controls to manage the WebSocket connection such as the “Connect” and “Disconnect” buttons.


Technological Requirements
Use React for rendering and Redux to store the market data. Feel free to create a custom style for the widgets, it can be very simple. 
Use Bitfinex WebSocket V2 API to obtain the data.
https://docs.bitfinex.com/v2/docs

Suggestions
For React :
	You can start with any react-redux boilerplate or CRA.

For Native: 
Use this `expo init`(expo-cli) command and choose the minimal template to bootstrap your application quickly (no need to eject). It also makes the evaluation easier.
https://www.npmjs.com/package/expo-cli




Note:
You can submit code with any online editor or Github

I.e, Codepen, jsfiddle, snack, codesandbox


