import React from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectedCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className=''
}) {
  return (
    <div className={`bg-white p-3 rounded-lg flex justify-between px-10 ${className}`}>
      <div>
        <label className='text-black/40 mb-2 inline-block'>{label}</label>
        <input type='number' 
        className='shadow outline-none w-full bg-transparent py-1.5'
        placeholder='Amount'
        disabled={amountDisabled}
        value={amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        />
      </div>
      <div className=''>
        <p> Currency Type</p>
        <select 
        value={selectedCurrency}
        onChange={(e) => {onCurrencyChange && onCurrencyChange(e.target.value)}}
        disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}> {currency} </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default InputBox
