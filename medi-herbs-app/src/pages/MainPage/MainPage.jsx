import HeaderMain from '../../components/HeaderMain/HeaderMain.jsx';
import MainBackgroundImage from '../../components/MainBackgroundImage/MainBackgroundImage.jsx';
import MainContent from '../../components/MainContent/MainContent.jsx';

import './style.css';


const MainPage = () => {
    return (
        <section className="mainPage">
            <HeaderMain />
            <MainBackgroundImage img={require("../../img/mainBackgroundImage.jpg")} />
            <MainContent />
        </section>
    );
}

export default MainPage;