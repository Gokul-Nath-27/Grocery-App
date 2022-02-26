import './Footer.scss';
const Footer = ({items}) => {
    return (
        <div className="footer">
            <p>You have <span>{items.length}</span> items in you list! </p>
        </div>
    )
}

export default Footer
