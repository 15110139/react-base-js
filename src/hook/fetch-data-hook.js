import axios from 'axios';
import { useEffect, useState } from 'react';

export const FetchData = (url) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const result = await axios.get(url);
        setData(result.data);
        setLoading(false);
        console.log('Call api success');
      } catch (error) {
        const errorMessage = error?.message || 'Call api fail';
        console.error(errorMessage);
        setError(errorMessage);
      } finally {
        setLoading(false);
        console.log('Call api done');
      }
    })();
  }, [url]);
  return { isLoading, error, data };
};
