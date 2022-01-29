import {Icon} from 'components/Icons';
import { NavLink } from 'react-router-dom';



export default function Menu() {


  return (
      <nav className="px-2">
        <ul className="flex flex-col">
            <li>
                <NavLink activeClassName="!text-white " to={"/"} href ="#" exact className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4">
                    <span className='transition-colors'>
                        <Icon name="home"/>
                    </span>
                    <span className='transition-colors hidden'>
                        <Icon name="acthome"/>
                    </span>
                    Ana sayfa
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="!text-white" to={"/search"} href="#" className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4">
                    <span className='transition-colors'>
                        <Icon name="search" size={24} />
                    </span>
                    <span className='transition-colors hidden'>
                        <Icon name="actsearch"/>
                    </span>
                    Ara
                </NavLink>
            </li>
            <li>
                <NavLink activeClassName="!text-white" to={"/collection"} href="#" className="h-10 flex items-center text-sm font-bold text-link hover:text-white px-4 gap-4">
                    <span className='transition-colors'>
                        <Icon name="lib" size={24} />
                    </span>
                    <span className='transition-colors hidden'>
                        <Icon name="actcollection"/>
                    </span>
                    Kitaplığın
                </NavLink>
            </li>
        </ul>
      </nav>
  )
}
