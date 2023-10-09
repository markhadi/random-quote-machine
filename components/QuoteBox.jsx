"use client";

import getRandomColor from "@/helpers/getRandomColor";

import {
  setQuote,
  setAuthor,
  setBackgroundColor,
  setIsLoading,
} from "@/redux/quotesSlice";

import { useDispatch, useSelector } from "react-redux";

import { Skeleton } from "./ui/skeleton";

import QuoteComponent from "./QuoteComponent";
import QuoteActions from "./QuoteActions";

import { useEffect } from "react";

const QuoteBox = ({ initialQuote }) => {
  const dispatch = useDispatch();
  const { quote, author, backgroundColor, isLoading } = useSelector(
    (state) => state.quotes
  );

  const quotes = initialQuote.quotes;
  const randomIndex = Math.floor(Math.random() * quotes.length);

  useEffect(() => {
    if (initialQuote) {
      dispatch(setIsLoading(false));
      fetchAndChangeQuote();
    }
  }, []);

  const fetchAndChangeQuote = () => {
    dispatch(setQuote(quotes[randomIndex].quote));
    dispatch(setAuthor(quotes[randomIndex].author));
    dispatch(setBackgroundColor(getRandomColor()));
  };

  const tweetUrl = `https://twitter.com/intent/tweet?text="${quote}" - ${author}`;

  useEffect(() => {
    document.body && (document.body.style.backgroundColor = backgroundColor);
    document.body && (document.body.style.color = backgroundColor);
  }, [backgroundColor]);

  return (
    <div id="quote-box">
      {isLoading ? (
        <Skeleton className="w-80 h-20 rounded-md" />
      ) : (
        <QuoteComponent quote={quote} author={author} />
      )}

      {isLoading ? (
        <div className="flex justify-between">
          <Skeleton className="w-10 h-10 rounded-md" />
          <Skeleton className="w-24 h-10 rounded-md" />
        </div>
      ) : (
        <QuoteActions
          backgroundColor={backgroundColor}
          fetchAndChangeQuote={fetchAndChangeQuote}
          tweetUrl={tweetUrl}
        />
      )}
    </div>
  );
};

export default QuoteBox;
