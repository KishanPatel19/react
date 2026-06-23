import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrency";
import InputBox from "./components/InputBox";

function App() {
const [amount,setAmount] = useState(0)
const[from,setFrom] = useState("usd")
const [to,setTo]= useState("inr")
const [convertedAmount,setConvertedAmount]= useState(0)

let currencyInfo = useCurrencyInfo(from)
let options = Object.keys(currencyInfo);

const swap =()=>{
  setFrom((prev)=>to)
  setTo(prev=>from)
  setConvertedAmount(amount)
  setAmount(convertedAmount)
}

const convert =()=>{
  setConvertedAmount(amount * currencyInfo[to])
}

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBRzfy-xFFhpH1SfE6MxRZdfD5KAGlWu9aZGprlbDYV3IaY-LZGU4y4vM&s')`,
      }}
    >
      
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox 
              label="From"
              amount={amount}
              onAmountChnage={(value)=>setAmount(value)}
              onCurrencyChange={(value)=>setFrom(value)}
              selectCurrency={from}
              currencyOptions={options}


              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox 
              label="To"
              amount={convertedAmount}
              onCurrencyChange={(value)=>setTo(value)}
              selectCurrency={to}
              currencyOptions={options}
              amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert
            </button>
          </form>
        </div>
      
    </div>
  );
}

export default App;
