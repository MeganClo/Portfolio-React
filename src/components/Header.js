import Navbar from "./Navbar"

const Header = () => {
    return (
        <header className="bg-blue-600">
            <div className="container mx-auto flex justify-between">
                <Navbar />
            </div>
        </header>
    )
}

export default Header;