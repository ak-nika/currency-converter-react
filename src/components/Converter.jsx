import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

const Converter = ({ rates }) => {
  const [isConverted, setIsConverted] = useState(false);
  const [fromCurrency, setFromCurrency] = useState("disabled");
  const [toCurrency, setToCurrency] = useState("disabled");

  return (
    <div className="bg-white w-full max-w-[400px] p-6 flex flex-col justify-center gap-4 rounded-2xl shadow">
      <h1 className="text-[#002366] text-center font-bold text-[28px]">
        Nika's Currency Converter
      </h1>

      <label>
        <span className="text-[#002366] font-semibold text-base">Amount:</span>
        <input
          placeholder="Enter amount"
          type="number"
          className="text-base font-normal text-[#333333] bg-[#f9f9f9] w-full p-2 rounded-lg border-[#cccccc] border transition-all focus:border-[#007bff] outline-none"
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
          {Object.keys(rates).forEach((currency) => {
            <option key={currency} value={currency}>
              {currency}
            </option>;
          })}
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
          {Object.keys(rates).forEach((currency) => {
            <option key={currency} value={currency}>
              {currency}
            </option>;
          })}
        </select>
      </label>

      <button className="text-base font-semibold rounded-lg text-white bg-[#007bff] py-2 px-4 cursor-pointer transition-colors hover:bg-[#0056b3]">
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
          Conversion Result: <span className="font-bold">{"XXX XXXXXX"}</span>
        </p>
      </div>
    </div>
  );
};

export default Converter;
