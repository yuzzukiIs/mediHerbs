import './style.css';

const HeaderMain = () => {
    return (
        <header className="header">
            <div className="headerBox">
                <div className="headerBox__language">
                    <ul>
                        <li className="ru">ру</li>
                        <li className="kg">кр</li>
                        <li className="en">en</li>
                    </ul>
                </div>
                <div className="headerBox__search">
                    <input className="" type="text" placeholder="поиск" />
                </div>
                <div className="headerBox__about">
                    <div className="header__about__text">
                        о нас
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderMain;