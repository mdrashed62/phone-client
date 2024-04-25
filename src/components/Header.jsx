import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="text-center">
            <Link to='/phones'>Phones</Link>
        </div>
    );
};

export default Header;