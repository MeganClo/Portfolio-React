import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="bg-red-800">
            <div className="container mx-auto flex justify-between">
                <Navbar />
            </div>
        </header>
    )
}

export default Header;