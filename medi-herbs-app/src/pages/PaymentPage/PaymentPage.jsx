import './style.css';

const PaymentPage = () => {
    return (
        <div className="paymentPage">
            <div className="paymentPage__block">
                <div className="paymentPage__block__container">
                    <div className="rowBlock">

                    </div>
                    <div className="rowBlock-comment">

                    </div>
                    <div className="rowBlock-paymentMethod__title">
                        Способ оплаты
                    </div>
                    <div className="rowBlock-paymentMethod">

                    </div>
                    <div className="rowBlock-acceptPolicy">
                        <input type="checkbox"></input>Я принимаю условия<a href="#" target="_blank" rel="norefferer">Публичной оферты</a>
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