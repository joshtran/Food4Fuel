import React from 'react';

class Points extends React.Component {
  render() {
    return (
      <div className = "panel panel-default">
         <div className = "panel-heading">
           User Points
         </div>

         <div className = "panel-body">
          <div className="circle">
            <div className="copy"><h1>9000</h1></div>
          </div>
         </div>
      </div>
    );
  }
}

export default Points;