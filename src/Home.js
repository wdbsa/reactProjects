import { useState, useEffect } from 'react';
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
       // console.log('use effect ran');
        fetch('http://localhost:8000/blogs')
            .then(response => {
               return response.json();
            })
            .then((data) => {
                setBlogs(data);
                setIsLoading(false);
            });
    }, []);

    return ( 
        <div className="home">
        { isLoading && <div>Loading...</div> }
        {blogs && <BlogList blogs={blogs} title="The F blogs!" /> }
        </div>
     );
}
 
export default Home;