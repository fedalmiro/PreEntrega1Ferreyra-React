import { Cart3 } from 'react-feather';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            <Cart3 size={24} />
            <span className="cart-count">0</span>
        </div>
    );
};

export default CartWidget;