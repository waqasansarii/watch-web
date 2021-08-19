import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import AppNavbar from "../Components/Navbar/Navbar";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Singup/Signup";

const AppRouter = ()=> {
    return (
        <Router>
            <AppNavbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
            </Switch>
        </Router>
    )
}

export default AppRouter