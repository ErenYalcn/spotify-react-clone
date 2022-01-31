import {Icon} from 'components/Icons';
import { NavLink } from 'react-router-dom';
import React from 'react'


export default function Menu() {



  return (
      <div id='tummenu'>
      <nav className="px-2">
          
        <ul className="flex flex-col">
            <li>
               
                <NavLink activeClassName="!text-white " to={"/"} exact className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {window.location.href === 'http://localhost:3000/' ? <Icon name="acthome"/> : <Icon name="home"/>}
                    Ana sayfa
                    </NavLink>
            </li>
            <li>
                <NavLink activeClassName="!text-white" to={"/search"} className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {window.location.href === 'http://localhost:3000/search' ? <Icon name="actsearch"/> : <Icon name="search"/>}

                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="!text-white" to={"/collection"} className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4 transition-colors">
                {window.location.href === 'http://localhost:3000/collection' ? <Icon name="actcollection"/> : <Icon name="lib"/>}

                    Kitaplığın
                </NavLink>
            </li>
        </ul>
      </nav>
      </div>
  )
}


