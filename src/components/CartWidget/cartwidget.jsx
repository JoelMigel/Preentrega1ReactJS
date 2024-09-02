import './cartwidget.css';

export const CardWidget = () => {
  let items = 3; 

  return (
    <div className="cart-widget">
      <button type="button" className="btn position-relative">
        Carrito <i className="bi bi-cart-fill"></i>
        <span className="badge rounded-pill">
          {items}
          <span className="visually-hidden">unread messages</span>
        </span>
      </button>
    </div>
  );
};