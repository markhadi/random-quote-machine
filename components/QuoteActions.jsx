import Image from "next/image";

const QuoteActions = ({ backgroundColor, fetchAndChangeQuote, tweetUrl }) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <a
        id="tweet-quote"
        href={tweetUrl}
        target="_blank"
        style={{ backgroundColor: backgroundColor }}
      >
        <Image src={"/twitter.svg"} width={24} height={24} alt="Tweet" />
      </a>
      <button
        id="new-quote"
        onClick={fetchAndChangeQuote}
        style={{ backgroundColor: backgroundColor }}
      >
        New Quote
      </button>
    </div>
  );
};

export default QuoteActions;
