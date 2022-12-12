import './style.css';

const PaymentPage = () => {
    return (
        <div className="paymentPage">
            <div className="paymentPage__block">
                <div className="paymentPage__block__container">
                    <div className="rowBlock">
                        <div className="rowBlock-paymentSum">
                            сумма
                        </div>
                        <select className="rowBlock-paymentSelect">
                            <option>KGS</option>
                            <option>RUB</option>
                            <option>KZT</option>
                            <option>USD</option>
                            <option>EUR</option>
                        </select>
                        <div className="rowBlock-paymentEmail">
                            Email адрес...
                        </div>
                    </div>
                    <input className="rowBlock-comment" type="text" placeholder="Комментарий...">
                        
                    </input>
                    <div className="rowBlock-paymentMethod__title">
                        Способ оплаты
                    </div>
                    <select className="rowBlock-paymentMethod">
                        <option>Банковской картой</option>
                        <option>MegaPay</option>
                        <option>O деньги</option>
                        <option>Мбанк</option>
                        <option>Элсом</option>
                    </select>
                    <div className="rowBlock-acceptPolicy">
                        <input type="checkbox"></input>Я принимаю условия <a href="#" target="_blank" rel="norefferer">Публичной оферты</a>
                    </div>
                    <buttonn className="rowBlock-paymentButton">
                        Выполнить
                    </buttonn>
                </div>
            </div>
        </div>
    );
}

export default PaymentPage;