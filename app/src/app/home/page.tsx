'use client';

const HomePage = () =>{
    const handleBtn = () =>{
        alert('Me');
    }
    return (
        <>
            <h1>Home page</h1>
            <div>
                <button onClick={ () => handleBtn() }> Back Home</button> 
            </div>
        </>
    );
}

export default HomePage;