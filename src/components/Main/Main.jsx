import React from 'react';

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-4">
            <h1>Sidebar</h1>
          </div>
          <div className="col-8">
            <h1>Main</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;