import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div className="navContainer">
            <Link to="/">
                <button>anasayfa</button>
            </Link>
            <Link to="/search">
                <button>aramasayfası</button>
            </Link>
            <Link to="/detail">
                <button>detaytsayfası</button>
            </Link>
            <Link to="/user">
                <button>kullanıcısayfası</button>
            </Link>
        </div>
    )
}

export default Nav;