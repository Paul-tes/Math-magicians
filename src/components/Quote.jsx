import { useEffect, useState } from 'react';
import fetchQuote from '../API/quoteApi';

const Quote = () => {
  const [data, setData] = useState({
    quote: '',
    author: '',
    category: '',
  });
  const [status, setStatus] = useState(null);
  const catagory = ['age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best', 'birthday', 'business',
    'car', 'change', 'communications', 'computers', 'cool', 'courage', 'dad', 'dating', 'death', 'design', 'dreams',
    'education', 'environmental', 'equality', 'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food',
    'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god', 'good', 'government', 'graduation', 'great', 'happiness',
    'health', 'history', 'home', 'hope', 'humor', 'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge',
    'leadership', 'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success'];
  const index = Math.floor(Math.random() * catagory.length);
  const url = `https://api.api-ninjas.com/v1/quotes?category=${catagory[index]}`;
  const key = '1ZjiiTojrbnI2qvRhVgFQBfsw42MEyghy7v2xadD';

  useEffect(() => {
    const fetchQuoteAsync = async () => {
      try {
        setStatus('Loadding....');
        const response = await fetchQuote(url, key);
        setData(response[0]);
        setStatus('Data loaded successfully');
      } catch (error) {
        setStatus('Error fetching');
      }
    };

    fetchQuoteAsync();
  }, [setStatus]);

  return (
    <div className="quote-container">
      <div className="quote">
        <p className="catagory-p">
          {' '}
          <a href="qoute">&lt; </a>
          {data.category}
          <a href="qoute"> &gt;</a>
        </p>
        <p className="q-p">
          {data.quote}
          {' '}
          &apos;
          {data.author}
          &apos;
        </p>
      </div>
      <p className="status">{status}</p>
    </div>
  );
};

export default Quote;
