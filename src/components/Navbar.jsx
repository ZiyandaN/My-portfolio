
function Navbar() {
    return (
        <nav className='flex items-center justify-between bg-light bg-purple-300 px-8 py-4 text-white '>
            <h1 className ="text-xl font-bold">Ziyanda Ndaba</h1>
            <ul className= "flex gap-6">
                <li><a href ="#home"className='hover:text-gray-400'>Home</a></li>
                <li><a href ="#projects"className='hover:text-gray-400'>Projects</a></li>
                <li><a href ="#contact"className='hover:text-gray-400'>Contact</a></li>
            </ul>

        </nav>
    )
}

export default Navbar; //the code reads top to bottom