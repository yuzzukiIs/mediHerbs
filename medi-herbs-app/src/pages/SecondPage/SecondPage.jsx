import { NavLink } from 'react-router-dom';


import logo from '../../logo.svg';
import './style.css';

const SecondPage = (props) => {
    return (
        <>
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
                        <NavLink to="/orderGoods">
                            <div className="header__about__text">
                                заказать
                            </div>
                        </NavLink>
                    </div>
                </div>
            </header>
            <div className="mainBackgroundImage">
                <img src={props.img} alt="Background Image medicinal herbs" />
                <div className="logoBlock">
                    <div className="logo">
                        <img src={logo} alt="Mediherbs logotype" />
                    </div>
                </div>
            </div>
            <main className="secondPageContent">
                <div className="secondPageContent__block">
                    <div className="secondPageContent__block__title">
                        {props.title}
                    </div>
                    <div className="secondPageContent__block__text">
                        {props.text1}<br />
                        {props.text2}<br />
                        {props.text3}<br />
                        {props.text4}<br />
                        {props.text5}<br />
                        {props.text6}
                    </div>
                </div>
            </main>
        </>
    );
}

export default SecondPage;