import QuoteBox from "@/components/QuoteBox";

async function getData() {
  const res = await fetch(
    "https://gist.githubusercontent.com/markhadi/7854969e2282f9e1a77131ed842ca1e9/raw/6a53799267c125d9cbfde9fcccd51a3edd5994fa/quotes.json"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = async () => {
  try {
    const data = await getData();

    return <QuoteBox initialQuote={data} />;
  } catch (error) {
    return (
      <div>
        <p>{error.message}</p>
      </div>
    );
  }
};

export default Home;
