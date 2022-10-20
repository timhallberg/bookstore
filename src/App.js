import { Switch, Route, Redirect } from 'react-router-dom';
import { BookCardView } from './bookcardview';
import { BookDetails } from './bookdetails';
import { NavBar } from './navbar';
import { Footer } from './footer';

/*This is the root component and starting point to render other components.*/
function App() {
  return (
    <div className="App" style={{ marginBottom: "200px" }}>
      {/*here Navbar renders and no need to place it inside Swith because we want always to render it*/}
      <NavBar />
      {/*here we use a switch to render the component that we need. Switch means that one of the Route renders and others are ignored*/}
      <Switch>
        {/* "/:bookID" is a method to send the data inside the address bar*/}
        <Route path="/bookdetails/:bookID" component={BookDetails}></Route>
        {/* "/:category/:searchPhrase?" is a method to send two input data inside the address bar. the symbol "?" here means that the value of the searchPhrase can be also null*/}
        <Route path="/bookcardview/:category/:searchPhrase?" component={BookCardView}></Route>
        {/*we redirect the user to the all book component if the user enters an invalid address and none of the Routes match.*/}
        <Redirect to="/bookcardview/all"></Redirect>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
