import React from 'react';

function OrderDetail({ match } : { match: any}) {

  return (
    <div>
      <h1>{"this is order-detail"}</h1>
      {match.params.id}
    </div>
  );
}

export default OrderDetail;