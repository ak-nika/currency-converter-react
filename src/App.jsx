import { useEffect, useState } from "react";
import Body from "./components/Body";
import Converter from "./components/Converter";
import Loader from "./components/Loader";
import useFetch from "./hooks/useFetch";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [rates, setRates] = useState(null);

  useEffect(() => {
    const data = useFetch();

    setRates(data);
    setIsLoading(false);
  }, []);

  return <Body>{isLoading ? <Loader /> : <Converter rates={rates} />}</Body>;
}
