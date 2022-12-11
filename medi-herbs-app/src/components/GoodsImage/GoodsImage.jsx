import './style.css';

const GoodsImage = (props) => {
    return (
        <>
            <div className="goodsImage">
                <img src={props.img} alt="Object's Image" />
            </div>
        </>
    );
}

export default GoodsImage;