// import fetchToken from './token';

const fetchTriviaApi = async (tokenInfo) => {
  // const tokenInfo = await fetchToken();
  const url = (`https://opentdb.com/api.php?amount=5&token=${tokenInfo}`);
  return fetch(url).then((response) => response.json()).then((data) => data)
    .catch((error) => `Error found: ${error}`);
};

export default fetchTriviaApi;
