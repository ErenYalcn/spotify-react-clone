import logo from 'components/image/logo.svg'
import Menu from 'components/Header/Menu'
export default function header() {
    return(
      <div className="w-60 py-6 bg-black flex flex-col">
          <a href="#" className='mb-7 px-6'>
          <img className='h-10 w-auto ' src={logo} />
          </a>
          <Menu />
      </div>
    )
  }
  
