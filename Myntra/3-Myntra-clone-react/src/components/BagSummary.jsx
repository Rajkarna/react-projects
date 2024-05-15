import React from "react";
import { useSelector } from "react-redux";

const BagSummary = () => {

  const bagItemsids = useSelector(state => state.bag)
  const items = useSelector((state) => state.items);
  const bagItems = useSelector((state) => state.bag);

  const CONVENIENCE_FEE = 99;
  let totalMRP = 0
  let totalDiscount = 0

  const finalItems = items.filter((item) => {
    const listItems = bagItems.indexOf(item.id);
    return listItems >= 0;
  });

  finalItems.forEach(item => {
    totalMRP += item.current_price
    totalDiscount = totalMRP % 7;
  })

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEE;


  const totalItem = bagItemsids.length;
  
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({totalItem} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">{CONVENIENCE_FEE}</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};

export default BagSummary;
