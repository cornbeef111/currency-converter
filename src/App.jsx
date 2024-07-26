import React from 'react'
import img from './images/moneyBg.jpg'
import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
   const [amount, setAmount] = React.useState(0)
   const [from, setFrom] = React.useState('usd')
   const [to, setTo] = React.useState('inr')
   const [convertedAmount, setConvertedAmount] = React.useState(0)
 
   const currencyInfo = useCurrencyInfo(from)

  //  settimg the options in the <select> tag to be the data (gotten from api) keys
  const options = Object.keys(currencyInfo)

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
   <div style={{backgroundImage:`url(${img})`}} 
   className='w-full h-screen bg-cover bg-no-repeat flex flex-wrap justify-center items-center'>
    <div className='w-full'>
      <div className='w-full max-w-3xl mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e) => {
          e.preventDefault()
          convert()
        }}>
          <div className='w-full mb-1'>
            <InputBox 
            label='from'
            amount={amount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setFrom(currency)}
            onAmountChange={(amount) => setAmount(amount)}
            selectedCurrency={from}
            />
          </div>
          <div className='relative h-0.5 w-full'> 
            <button 
            className='bg-blue-700 text-white px-4 py-2 border-2 rounded-lg absolute left-1/2 -translate-x-1/2 -translate-y-1/2'
            onClick={swap}>
              Swap
              </button>
          </div>

          <div className='w-full mb-1'>
            <InputBox 
            label='to'
            amount={convertedAmount}
            currencyOptions={options}
            onCurrencyChange={(currency) => setTo(currency)}
            selectedCurrency={to}
            amountDisabled
            />
          </div>

          <button type='submit' className='w-full bg-blue-700 p-2.5 rounded-md'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
        </form>
      </div>
    </div>
   </div>
  )
}

export default App
