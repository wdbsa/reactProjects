import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => {
                if(!response.ok) {
                    throw Error('could not fetched');
                }
               return response.json();
            })
            .then(data => {
                setData(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    return { data, isLoading, error }
}

export default useFetch;