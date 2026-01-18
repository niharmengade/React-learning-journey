import { useState } from 'react'
import './App.css'
import InputBox from './mycomponents/Input'
import useCurrencyInfo from './myhooks/useCurrencyinfo.js'

function App() {
  const [amount ,setamount] = useState(0)
  const [from , setfrom] = useState("usd")
  const [to , setto] = useState("inr")
  const [convertedamount , setconvertedamount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)

  const swap =()=>{
    setfrom(to)
    setto(from)
    setconvertedamount(amount)
    setamount(convertedamount)
  }

  const convert = ()=>{
    setconvertedamount(amount * currencyInfo[to])
  }

  return(
    <div
  className="w-full min-h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
  style={{
    backgroundImage: "url('https://images.pexels.com/photos/5980584/pexels-photo-5980584.jpeg')",
  }}
>

      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/0 hover:scale-105 transform transition-all duration-400">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-3 ">
              <InputBox 
             className="bg-gradient-to-r from-yellow-600 to-yellow-400
           transform
           hover:scale-105
           transition-all duration-400 ease-out"

                label="From"
                amount={amount}
                currencyoptions={options}
                oncurrencychange={(currency)=> setfrom(currency)}
                selectcurrency={from}
                onamountchange={(amount)=> setamount(amount)}
              />
            </div>

            
            <div className="w-full mt-1 mb-4">
              <InputBox
              className='bg-gradient-to-r from-yellow-400 to-yellow-600 transform hover:scale-105 transition-all duration-400 ease-out '
                label="To"
                amount={convertedamount}
                currencyoptions={options}
                oncurrencychange={(currency)=> setto(currency)}
                selectcurrency={to}
                amountdisabled
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-800 
           text-white py-2 rounded-lg mb-3
           cursor-pointer
           shadow-lg
           hover:from-yellow-600 hover:to-yellow-400
           hover:shadow-2xl hover:-translate-y-0.5 hover:scale-100
           transition-all duration-500 ease-out"

            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
