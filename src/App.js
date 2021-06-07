import "./App.css";
import { client } from "./client";
import { useState, useEffect } from "react";
import Home from "./components/Home/Home";
import Recipe from "./components/Recipe/Recipe";
import RecipePage from "./components/RecipePage/RecipePage";
import SearchAppBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ContactForm from "./components/Contact/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [recipesArray, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  //const [isError, setIsError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    client
      .getEntries()
      .then((response) => {
        console.log(response.items);
        setRecipes(response.items);
        setIsLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <SearchAppBar />
        {isLoading ? (
          <div className="load__style">
            <h4>Loading recipes...</h4>
            <i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
          </div>
        ) : (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:category">
              <Recipe recipesArray={recipesArray} />
            </Route>
            <Route exact path="/breakfast/:id">
              <RecipePage recipesArray={recipesArray} />
            </Route>
            <Route exact path="/lunch/:id">
              <RecipePage recipesArray={recipesArray} />
            </Route>
            <Route exact path="/dinner/:id">
              <RecipePage recipesArray={recipesArray} />
            </Route>
            <Route exact path="/contact">
              <ContactForm />
            </Route>
          </Switch>
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
