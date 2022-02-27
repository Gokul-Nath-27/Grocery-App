import './Header.scss'

const Header = ({title}) => {
    return (
        <div className="header">
            <h1>{title}</h1>
        </div>
    )
}

Header.defaultProps = {
    title: "Default Title"
}

export default Header

