import { useState } from 'react';

const Home = () => {
    const [name, setName] = useState("mark");
    const [age, setAge] = useState(30);
   
    const handleClick = () => {
        setName("wdbsa");
        setAge(78);
    };



    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <p>{ age }</p>
            <button onClick={handleClick}>Click Me</button>
        </div>

     );
}
 
export default Home;