import { useEffect, useState } from 'react';
import fetchQuote from '../API/quoteApi';

const Quote = () => {
  const [data, setData] = useState({
    quote: '',
    author: '',
    category: '',
  });
  const [status, setStatus] = useState(null);
  const url = 'https://api.api-ninjas.com/v1/quotes?category=happiness';
  const key = '1ZjiiTojrbnI2qvRhVgFQBfsw42MEyghy7v2xadD';

  useEffect(() => {
    const fetchQuoteAsync = async () => {
      try {
        setStatus('Loadding....');
        const response = await fetchQuote(url, key);
        setData(response);
        setStatus('Data loaded successfully');
      } catch (error) {
        setStatus(error);
      }
    };

    fetchQuoteAsync();
  }, []);

  return (
    <div className="quote-container">
      <div className="quote">
        <p className="catagory-p">
          Category:
          {' '}
          {data.category}
        </p>
        <p className="q-p">
          {data.quote}
          {' '}
          by&apos;
          {data.author}
          &apos;
        </p>
      </div>
      <p className="status">{status}</p>
    </div>
  );
};

export default Quote;
