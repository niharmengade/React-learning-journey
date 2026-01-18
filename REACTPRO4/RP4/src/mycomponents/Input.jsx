function InputBox({ // currencyoptions are been loopthrough to show different currency type to prevent 
    // from crashing if no currnecy type is passed we set default to empty array
    label,amount,onamountchange,currencyoptions=[],oncurrencychange,
    selectcurrency="usd",amountdisabled = false,currencydisabled = false,
    
    className = "",
}) {

    return (
        // In this css is return in { } to inject className for if user want to inject his own css
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label className="text-black/60 mb-2 inline-block">
                    {label}
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5 text-black"
                    type="text"
                    inputMode="numeric"
                    placeholder="Amount"
                    disabled={amountdisabled}
                    //to check the value is disabled or not
                    value={amount}
                    // to prevent it form crashing as onamountchange is a function  we add && operator to check if it is present or not
                    onChange={(e)=>onamountchange && onamountchange(Number(e.target.value))} // in function js take the value in string format so we convert it into number using NUMBER()
                />
            </div>

            <div className="w-1/2 flex flex-wrap justify-end text-right relative z-10">
                <p className="text-black/60 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-2 py-1 bg-white text-black cursor-pointer outline-none border border-gray-300"
                    value={selectcurrency}// To fetch the selected currency type which is by default "usd" 
                    onChange={(e)=> oncurrencychange && oncurrencychange(e.target.value)}
                    disabled={currencydisabled}// To  check if  the cirrency type is disabled or not 
                >
                    {/* using map function to loop through currencyoptions and using { } to  inject javascript
                        key is used to increase performace */}
                    {currencyoptions.map((currency)=>(
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
