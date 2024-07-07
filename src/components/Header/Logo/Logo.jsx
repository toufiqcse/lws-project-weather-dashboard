import logo from '../../../assets/logo.svg';

const Logo = () => {
    return (
        <a href="./index.html" className="w-full items-center md:items-start flex justify-center md:justify-start">
            <img className="h-9" src={logo} alt="Weather App" />
        </a>
    )
}

export default Logo;
