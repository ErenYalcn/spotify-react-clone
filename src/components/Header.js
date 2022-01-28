import logo from 'components/image/logo.svg'
export default function header() {
    return(
      <div className="w-60 py-6 bg-black">
          <img className='h-10 w-auto ml-6' src={logo} />
      </div>
    )
  }
  
