const useFetch = async () => {
  const apiKey = import.meta.env.VITE_API_KEY;
  const baseUrl = import.meta.env.VITE_BASE_URL;

  try {
    const data = await fetch(`${baseUrl}latest?access_key=${apiKey}`);
    const res = await data.json();
    const rates = res.rates;

    return rates;
  } catch (error) {
    console.error(error);
  }
};

export default useFetch;
