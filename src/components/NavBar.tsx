import './NavBar.css'

function NavBar() {
    return (
        <nav className='mt-6'>
            <div className='flex justify-between mb-6 text-4xl'>
                <div className='caladea-bold'>Danilo Canguçu</div>
                <div className='caladea-regular'>Menu</div>
            </div>
            <hr className="dashed" />
        </nav>
    )
}

export default NavBar
