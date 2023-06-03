const fetchQuote = async (link, key) => {
  try {
    const response = await fetch(link, {
      method: 'GET',
      headers: {
        'X-Api-Key': key,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch the data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export default fetchQuote;
