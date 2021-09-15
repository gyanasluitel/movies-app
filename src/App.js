import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Browse from "./components/Browse";
import HomePage from "./components/HomePage";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import PlanToWatch from "./components/PlanToWatch";
import Watched from "./components/Watched";
import { GlobalProvider } from "./context/GlobalState";

const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/browse" component={Browse} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/plantowatch" component={PlanToWatch} />
          <Route path="/watched" component={Watched} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
};

export default App;
