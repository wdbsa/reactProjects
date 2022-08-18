import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
       // console.log('use effect ran');
        fetch('http://localhost:8000/blogs')
            .then(response => {
                if(!response.ok) {
                    throw Error('could not fetched');
                }
               return response.json();
            })
            .then(data => {
                setBlogs(data);
                setIsLoading(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsLoading(false);
            });
    }, []);

    return ( 
        <div className="home">
        { error && <div>{ error }</div> }
        { isLoading && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} title="The F blogs!" /> }
        </div>
     );
}
 
export default Home;