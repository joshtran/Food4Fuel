import React from 'react';

class BoxDetails extends React.Component {
  render() {
    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
          Box Details
         </div>

         <div className = "panel-body">
          <dl>
            <dt>Produce:</dt>
            <dd></dd>
            <dt>Dairy:</dt>
            <dd></dd>
            <dt>Pastry:</dt>
            <dd></dd>
          </dl>
         </div>
      </div>
    );
  }
}

export default BoxDetails;