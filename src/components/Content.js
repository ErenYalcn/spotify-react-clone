import { Switch, Route } from 'react-router-dom';
import Navbar from 'components/Navbar'

import Home from "views/Home"
import Search from "views/Search"
import Collection from 'views/Collection';

export default function content() {
  return(
    <div className='flex-auto overflow-auto'>
        <Navbar />
        <div className='px-8 pt-5'>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/search">
              <Search />
          </Route>
          <Route path="/collection">
              <Collection />
          </Route>
        </Switch>
        </div>
    </div>
  )
}
