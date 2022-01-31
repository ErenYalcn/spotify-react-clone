import Navigation from './Navbar/Navigation';
import User from './Navbar/User';
import {useRouteMatch} from "react-router-dom";
import TopSearch from './Navbar/TopSearch';
import LibFilter from './Navbar/LibFilter';


export default function Navbar() {

	const searchRoute = useRouteMatch('/search')

		const libRoute = useRouteMatch('/collection')

    return(
      <nav className="h-[3.75rem] flex items-center justify-between px-8">
        
        <Navigation />
        {searchRoute &&(<TopSearch /> )}
        {libRoute &&(<LibFilter /> )}
        <User />
      </nav>
    )
  }