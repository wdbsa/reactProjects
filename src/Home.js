import { useState } from 'react';
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mark', id: 3}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
    };

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="The F blogs!" handleDelete={handleDelete}/>
        </div>
     );
}
 
export default Home;