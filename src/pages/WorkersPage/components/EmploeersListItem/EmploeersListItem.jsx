import React from "react";
import "./EmploeersListItem.css";

const EmploeersListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleProps,
    increase,
    like,
  } = props;

  // let classNames = increase? `list-group-item d-flex justify-content-between increase` :`list-group-item d-flex justify-content-between `
  let classNames = increase ? `list-group-item increase` : `list-group-item`;
  let classNameLike = like ? " like" : " ";
  return (
    <li className={classNames + classNameLike}>
      <span 
        className="list-group-item-label" 
        onClick={onToggleProps} 
        data-toggle='like'>
            {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + " $"}
      />
      {/* <div className='d-flex justify-content-center align-items-center time'> */}
      <div className="time">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProps}
          data-toggle='increase'
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmploeersListItem;
