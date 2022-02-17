const fetchToken = () => {
  const tokenRequestUrl = 'https://opentdb.com/api_token.php?command=request';
  return fetch(tokenRequestUrl)
    .then((result) => result.json())
    .then((data) => (data))
    .catch((error) => `Error found: ${error}`);
};

export default fetchToken;
