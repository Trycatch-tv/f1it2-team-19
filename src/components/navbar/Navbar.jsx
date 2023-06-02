import { Link } from 'react-router-dom'
import BtnDark from '../btn-Dark/BtnDark'
import { MaterialSymbolsDeceased, SolarRoundedMagniferLinear } from '../icons'

const Navbar = () => {
  return (
    <main className='bg-primary min-h-fit shadow-lg'>
      <div className= 'w-full h-full py-3 px-7'>
        <div className='flex justify-between items-center gap-2'>
          <div className='flex items-center'>

            <span className='text-white text-xl '>
              <MaterialSymbolsDeceased/>
            </span>

            <Link to='/login' className='inline-block text-xl transition-all'>
              <h1 className='font-bold text-white'>Trackit</h1>
            </Link>
            <div className='relative ml-6'>
              <div className='absolute inset-y-0 left-0 flex items-center pl-3 font-bold pointer-events-none'>
                <SolarRoundedMagniferLinear />
              </div>
              <input type='search' id='default-search' className=' input-search  ' placeholder='Search.....' />
            </div>

          </div>

          <span className='btn-dark' >
              <BtnDark />
          </span>
        </div>
      </div>
  </main>
  )
}
export default Navbar
