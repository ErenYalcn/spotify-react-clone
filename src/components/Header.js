import logo from 'components/image/logo.svg'
import Menu from 'components/Header/Menu'
import {Icon} from 'components/Icons';
import Playlist from './Header/Playlist';
import DownloadApp from './Header/DownloadApp';




export default function header() {
  


    return(
      <div className="w-60 pt-6 bg-black flex flex-col flex-shrink-0">
          <a href="#" className='mb-7 px-6'>
          <img className='h-10 w-auto ' src={logo} />
          </a>

          <Menu />

          <nav className='mt-8 px-6'>
            <ul>
              <li>
                <a className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white transition-colors group" href="#">
                <span className='bg-white p-[6px] bg-opacity-70 group-hover:bg-opacity-90'>
                  <Icon name="plus" />
                </span>
                Çalma Listesi Oluştur
                </a>
                <a className="flex items-center gap-x-3 text-sm font-bold text-link hover:text-white mt-4 transition-colors group" href="#">
                <span className='bg-gradient-to-r from-gra1 to-gra2  p-[6px] opacity-70 group-hover:opacity-100'>
                  <Icon name="menuheart" />
                </span>
                Beğenilen Şarkılar
                </a>
              </li>
            </ul>
            <div className="h-[1px] bg-active mt-5"></div>
          </nav>
          <nav className='px-6 pt-3 overflow-y-auto scrollbar-hide'>
            <Playlist />
          </nav>
          <span className='px-6 pt-3 '><DownloadApp /></span>
      </div>
    )
  }
