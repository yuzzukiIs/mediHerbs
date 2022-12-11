import './style.css';

const GoodsContent = (props) => {
    return (
        <div className="goodsContent">
            <div className="goodsContent__title">
                {props.title}
            </div>
            <div className="goodsContent__text">
                {props.text}
            </div>
        </div>
    );
}
 
export default GoodsContent;