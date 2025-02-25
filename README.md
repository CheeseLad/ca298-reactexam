
# Ca298 Test app

This is a react skeleton application for the Ca298 lab exam.

## Installation
Download the source code and navigate to the folder containing `package.json` to install the libraries run 
```sh 
npm install
```

## App structure
The skeleton application contains `react`and `react router`.

- `App.js` contains the `BrowserRouter` and where you should edit your apps URLs
- All other components are inside the `Layouts` folder
- `Container.js` has a simple navigation bar and ontains an `Outlet` to display this navbar on every page
- `FourOhFour.js` contains a simple 404 page to catch any unknown urls. When adding URLs make sure to place them **before** this one in `App.js` 

e.g.
```js 
<BrowserRouter>
      <Routes>
        <Route path="/" element={<Container />} >
          <Route index element={<HomePage />} />
          <Route path="secondpage" element={<SecondPage />}/>
          <!-- Your routes go here -->
          <Route path="*" element={<FourOhFour />} />
        </Route>
      </Routes>
    </BrowserRouter>
```
- `Homepage.js` is set as the index page. It contains the imports for `useState`and `useEffect` and contains a `Link`to the second page
- `SecondPage.js` is a sample second page. It contains the same imports as `Homepage.js` and a link to return to the index (home) page.

## Running the app

To run the app type 

```sh
npm start
```

This will open a server running on localhost on port 3000 at [http://localhost:3000](http://localhost:3000)

This port has been whitelisted by CORS in the django application.

## Modifying the app
You are free to modify this app as you see fit to complete the lab exam
