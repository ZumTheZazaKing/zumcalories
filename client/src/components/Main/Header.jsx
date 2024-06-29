import Logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header className=" text-center px-4 py-2">
            <img src={Logo} alt="zumcalories logo" width={75} className='mx-auto' />
            <h1 className="font-semibold text-2xl">ZumCalories</h1>
            <p>Count your calories!</p>
        </header>
    )
}; export default Header;