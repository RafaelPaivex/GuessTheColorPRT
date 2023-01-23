const Navbar = ({ corCerta }) => {
    return (
        <header className="h-25">
            <nav className="navbar">
                <div className="container">
                    <div className="title w-100">
                        <h1 className="text-center">Guess the color</h1>
                        <p className="text-center">{corCerta}</p>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;