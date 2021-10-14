const NavLink = ({ text }) => {
    return (
        <li className="nav-link">
            <a
                href="/"
                onClick={e => e.preventDefault()}
            >
                {text}
            </a>
        </li>
    )
}

export default NavLink
