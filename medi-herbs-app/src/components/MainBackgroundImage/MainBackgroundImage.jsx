import './style.css';
import logo from '../../logo.svg';

const MainBackgroundImage = (props) => {
    return (
        <div className="mainBackgroundImage">
            <img src={props.img} alt="Background Image medicinal herbs" />
            <div className="logoBlock">
                <div className="logo">
                    <img src={logo} alt="Mediherbs logotype" />
                </div>
            </div>
        </div>
    );
}

export default MainBackgroundImage;