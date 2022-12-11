import {NavLink} from 'react-router-dom';


import GoodsImage from '../GoodsImage/GoodsImage.jsx';
import GoodsContent from '../GoodsContent/GoodsContent.jsx';

import './style.css';

const MainContent = () => {
    return (
        <>
            <div className="mainContent__verticalTitle">
                Список доступных лечебных трав
            </div>
{/* DOM elements for screens that bigger than 743px */}
            <main className="mainContent__vertical">
                <div className="mainContent__verticalBlock">
                    <div className="mainContent__verticalRow">
                        <NavLink to="/object1">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object1.jpg")} />
                                <GoodsContent title="Тархун" text="+аппетит, +обмен веществ, +усвоение мясных блюд, +витамины" />
                            </div>
                        </NavLink>
                        <NavLink to="/object2">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object2.jpg")} />
                                <GoodsContent title="Пустырник" text="+сердечний ритм, +сердечные сокращения, +снижает давление" />
                            </div>
                        </NavLink>
                        <NavLink to="/object3">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object3.jpg")} />
                                <GoodsContent title="Азиатская мята" text="+спазмолитическое, +болеутоляющее, +уменьшение метеоризма" />
                            </div>
                        </NavLink>
                    </div>
                    <div className="mainContent__verticalRow">
                        <NavLink to="/object4">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object4.jpg")} />
                                <GoodsContent title="Шалфей" text="+дезинфицирующее, +мочегонное, +спазмолитическое действия" />
                            </div>
                        </NavLink>
                        <NavLink to="/object5">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object5.jpg")} />
                                <GoodsContent title="Зизифора" text="+болеутоляющее, +аромат, +успокоительное" />
                            </div>
                        </NavLink>
                        <NavLink to="/object6">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object6.jpg")} />
                                <GoodsContent title="Зверобой" text="+польза для кожи, +противоожоговый, +заживление ран" />
                            </div>
                        </NavLink>
                    </div>
                    <div className="mainContent__verticalRow">
                        <NavLink to="/object7">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object7.jpg")} />
                                <GoodsContent title="Тысячелистник" text="+антимикробное, +ранозажиление, +уберает воспаления," />
                            </div>
                        </NavLink>
                        <NavLink to="/object8">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object8.jpg")} />
                                <GoodsContent title="Чабрец" text="+снимает ломоту в теле, +мочегонный эффект, +сокращение периода заболевания" />
                            </div>
                        </NavLink>
                        <NavLink to="/object9">
                            <div className="mainContent__verticalContainer">
                                <GoodsImage img={require("../../img/object9.jpg")} />
                                <GoodsContent title="Душица" text="+польза: при спазмах желудка, атонии кишечника, нервных расстройствах" />
                            </div>
                        </NavLink>
                    </div>
                </div>
            </main>
{/* DOM elements for screens that lesser than 744px */}
            <main className="mainContent">
                <div className="mainContent__title">
                    Список доступных лечебных трав
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object1.jpg")} />
                        <GoodsContent title="Тархун" text="+аппетит, +обмен веществ, +усвоение мясных блюд, +витамины" />
                    </div>
                    <NavLink to="/object1"><div className="mainContent__link">подробнее...</div></NavLink>
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object2.jpg")} />
                        <GoodsContent title="Пустырник" text="+сердечний ритм, +сердечные сокращения, +снижает давление" />
                    </div>
                    <NavLink to="/object2"><div className="mainContent__link">подробнее...</div></NavLink>
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object3.jpg")} />
                        <GoodsContent title="Азиатская мята" text="+спазмолитическое, +болеутоляющее, +уменьшение метеоризма" />
                    </div>
                    <NavLink to="/object3"><div className="mainContent__link">подробнее...</div></NavLink>
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object4.jpg")} />
                        <GoodsContent title="Шалфей" text="+дезинфицирующее, +мочегонное, +спазмолитическое действия" />
                    </div>
                    <NavLink to="/object4"><div className="mainContent__link">подробнее...</div></NavLink>
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object5.jpg")} />
                        <GoodsContent title="Зизифора" text="+болеутоляющее, +аромат, +успокоительное" />
                    </div>
                    <NavLink to="/object5"><div className="mainContent__link">подробнее...</div></NavLink>
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object6.jpg")} />
                        <GoodsContent title="Зверобой" text="+польза для кожи, +противоожоговый, +заживление ран" />
                    </div>
                    <NavLink to="/object6"><div className="mainContent__link">подробнее...</div></NavLink>
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object7.jpg")} />
                        <GoodsContent title="Тысячелистник" text="+антимикробное, +ранозажиление, +уберает воспаления," />
                    </div>
                    <NavLink to="/object7"><div className="mainContent__link">подробнее...</div></NavLink>
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object8.jpg")} />
                        <GoodsContent title="Чабрец" text="+снимает ломоту в теле, +мочегонный эффект, +сокращение периода заболевания" />
                    </div>
                    <NavLink to="/object8"><div className="mainContent__link">подробнее...</div></NavLink>
                </div>
                <div className="mainContent__Block">
                    <div className="mainContent__Group">
                        <GoodsImage img={require("../../img/object9.jpg")} />
                        <GoodsContent title="Душица" text="+польза: при спазмах желудка, атонии кишечника, нервных расстройствах" />
                    </div>
                    <NavLink to="/object9"></NavLink><div className="mainContent__link">подробнее...</div>
                </div>
            </main>
        </>

    );
}

export default MainContent;