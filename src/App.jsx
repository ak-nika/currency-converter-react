import Body from "./components/Body";
import Converter from "./components/Converter";
import Loader from "./components/Loader";
import useFetch from "./hooks/useFetch";

export default function App() {
  const { loading, data, error } = useFetch("latest");

  if (error) {
    return (
      <Body>
        <p>Error: {error}</p>
      </Body>
    );
  }

  return <Body>{loading ? <Loader /> : <Converter rates={data} />}</Body>;
}
