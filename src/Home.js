import { useState } from 'react';
import BlogList from './blogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mark', id: 3}
    ]);

    return ( 
        <div className="home">
           <BlogList blogs={blogs} title="The F blogs!"/>
           <BlogList blogs={blogs.filter((blog) => blog.author !== 'mark' )} title="Addtl Blogs!"/>
        </div>
     );
}
 
export default Home;