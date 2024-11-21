import { useRef, useState } from "react";

const Converter = ({ rates }) => {
  const [isConverted, setIsConverted] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("disabled");
  const [toCurrency, setToCurrency] = useState("disabled");
  const [result, setResult] = useState("XXX XXXXXX");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("error");
  const pRef = useRef();

  const handleClick = () => {
    if (amount === "") {
      setError("Please enter an amount you would like to convert");
      pRef.current.classList.remove("hidden");
      return;
    }
    if (fromCurrency === "disable" || toCurrency === "disabled") {
      setError("Please select both currencies to continue");
      pRef.current.classList.remove("hidden");
      return;
    }

    const convert = (rates[toCurrency] / rates[fromCurrency]) * Number(amount);
    const formattedResult = new Intl.NumberFormat().format(convert);

    pRef.current.classList.add("hidden");
    setResult(`${toCurrency} ${formattedResult}`);
    setIsConverted(true);
  };

  return (
    <div className="bg-white w-full max-w-[400px] p-6 flex flex-col justify-center gap-4 rounded-2xl shadow">
      <h1 className="text-[#002366] text-center font-bold text-[28px]">
        Nika's Currency Converter
      </h1>

      <p ref={pRef} className="text-[#dc3545] font-bold text-sm hidden">
        {error}
      </p>

      <label>
        <span className="text-[#002366] font-semibold text-base">Amount:</span>
        <input
          placeholder="Enter amount"
          type="number"
          className="text-base font-normal text-[#333333] bg-[#f9f9f9] w-full p-2 rounded-lg border-[#cccccc] border transition-all focus:border-[#007bff] outline-none"
          value={amount}
          onInput={(event) => setAmount(event.target.value)}
        />
      </label>

      <label>
        <span className="text-[#002366] font-semibold text-base">From:</span>
        <select
          className="text-base font-normal text-[#333333] bg-[#f9f9f9] w-full p-2 rounded-lg border-[#cccccc] border transition-all focus:border-[#007bff]"
          value={fromCurrency}
          onChange={(event) => setFromCurrency(event.target.value)}
        >
          <option value="disabled" disabled>
            Select a Currency
          </option>
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </label>

      <label>
        <span className="text-[#002366] font-semibold text-base">To:</span>
        <select
          className="text-base font-normal text-[#333333] bg-[#f9f9f9] w-full p-2 rounded-lg border-[#cccccc] border transition-all focus:border-[#007bff]"
          value={toCurrency}
          onChange={(event) => setToCurrency(event.target.value)}
        >
          <option value="disabled" disabled>
            Select a Currency
          </option>
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </label>

      <button
        className="text-base font-semibold rounded-lg text-white bg-[#007bff] py-2 px-4 cursor-pointer transition-colors hover:bg-[#0056b3]"
        onClick={handleClick}
      >
        Convert
      </button>

      <div
        className={`border w-full rounded-lg p-3 transition-colors ${
          isConverted
            ? "bg-[#f1faee] border-[#28a745]"
            : "border-[#0056b3] bg-[#c9e0f8]"
        }`}
      >
        <p
          className={`text-base text-center transition-colors ${
            isConverted ? "text-[#28a745]" : "text-[#0056b3]"
          }`}
        >
          Conversion Result: <span className="font-bold">{result}</span>
        </p>
      </div>
    </div>
  );
};

export default Converter;
