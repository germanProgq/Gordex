import React from 'react';

const OrdersHistory = ({ orders }) => {
  return (
    <div className="profile__history-main">
      {orders?.length === 0 ? (
        <p className="profile__history-alert">You have no orders</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="profile__history-top">
            <div className="profile__history-imgs">
              {order.items.map((item, index) => (
                <div key={index} className="profile__history-img-box">
                  <img src={item.image} alt={item.name} className="profile__history-img" />
                  {item.additionalCount > 0 && (
                    <div className="profile__history-img-overlay">+{item.additionalCount}</div>
                  )}
                </div>
              ))}
            </div>
            <div className="profile__history-info">
              <p className="profile__history-text">
                <img src="/images/profile/note.svg" alt="" className="profile__history-text-icon" />
                Order created :
                <span className="profile__history-date">{order.createdDate}</span>
              </p>
              <p className="profile__history-text">
                <img src="/images/profile/dollar-square.svg" alt="" className="profile__history-text-icon" />
                Payment :
                <span className="profile__history-span">
                  <img src="/images/profile/doge.svg" alt="" className="profile__history-currency" />
                  <span className="profile__history-span">{order.paymentAmount}</span>
                  <span className="profile__history-span profile__history-span--small">≈</span>
                  <span className="profile__history-span">${order.paymentUSD}</span>
                </span>
              </p>
              <p className="profile__history-text">
                <img src="/images/profile/3d-square.svg" alt="" className="profile__history-text-icon" />
                Shipping information
              </p>
              <ul className="profile__history-list">
                <li className="profile__history-list-item">
                  <div className="profile__history-list-marker"></div>
                  {order.shipping.name}
                </li>
                <li className="profile__history-list-item">
                  <div className="profile__history-list-marker"></div>
                  {order.shipping.address}
                </li>
                <li className="profile__history-list-item">
                  <div className="profile__history-list-marker"></div>
                  {order.shipping.phone}
                </li>
                <li className="profile__history-list-item">
                  <div className="profile__history-list-marker"></div>
                  {order.shipping.email}
                </li>
              </ul>
            </div>
            <div className="profile__history-divider"></div>
            <div className="profile__history-bottom">
              <p className="profile__history-status-text">Status:</p>
              <div className="profile__history-status">
                <p className="profile__history-order">
                  <span className="profile__history-order-text">
                    <span className="profile__history-order-icon">
                      <img src="/images/profile/timer.svg" alt="" className="" />
                    </span>
                    {order.status}
                  </span>
                  {order.statusDate}
                </p>
                <p className="profile__history-descr">
                  {order.statusDescription}
                </p>
                <a href="#" className="profile__history-btn">
                  <img src="/images/profile/chevron-light2.svg" alt="" className="profile__history-btn-icon" />
                  View shipping history
                </a>
                <p className="profile__history-delivery">
                  <img src="/images/profile/truck.svg" alt="" className="profile__history-delivery-icon" />
                  Delivery date :
                  <span className="profile__history-delivery-span">
                    {order.deliveryDate}
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default OrdersHistory;