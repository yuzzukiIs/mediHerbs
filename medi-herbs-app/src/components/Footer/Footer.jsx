import './style.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footerBlock">
                <div className="footerBlock__address">
                    <div className="address">Адрес:</div>
                    <div className="addressPoint">КР. г.Бишкек ул.Логвиненко</div>
                </div>
                <div className="footerBlock__contacts">
                    <div className="contacts">Контакты:</div>
                    <div className="contactsTelephon">+996 (111)-22-33-44</div>
                </div>
                <div className="footerBlock__socialMediaLinks">
                    <ul>
                        <li>
                            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noreferrer">Tik Tok</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noreferrer">Whats App</a>
                        </li>
                        <li>
                            <a href="#" target="_blank" rel="noreferrer">You Tube</a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;