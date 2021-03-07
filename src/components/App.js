import React from 'react';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import '../index.css';
import Nav from './Nav';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';

function App (){
    return( 
       <BrowserRouter>
            <Nav />
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route exact path="/signin" component={ SignIn } />
                <Route exact path="/signup" component={ SignUp } />
            </Switch>
         </BrowserRouter>
    );
}
export default App;