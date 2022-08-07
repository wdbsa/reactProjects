const Home = () => {

    const handleClick = (e) => {
        console.log('test', e);
    };

    const clickArg = (name, e) => {
        console.log('name = ' + name, e.target);
    };


    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={ (e) => clickArg('Mark', e) }>Click this</button>
        </div>

     );
}
 
export default Home;