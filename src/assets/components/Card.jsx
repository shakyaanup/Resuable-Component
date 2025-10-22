import React from "react";

const Card = ({ title, children, className = "" }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-md p-6 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-3">{title}</h2>}
      <div>{children}</div>
    </div>
  );
}

export default Card;