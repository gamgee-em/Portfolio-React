const Navbar = () => {
    
    const sayHello = (name) => {
        console.log('Hello! ' + name);
    }

    return (
        <nav>
            <div className='nav-container'>
                <a onClick={ (e) => {
                    //e.preventDefault();
                    sayHello('Sam');
                    }} href='/about'>About</a>
                <a href='/portfolio'>Portfolio</a>
                <a href='/resume'>Resume</a>
                <a href='/contact'>Contact</a>
            </div>
        </nav>
    )
};

export default Navbar;