import React from 'react';
import './BusinessList.css';

import Business from '../Business/Business';


class BusinessList extends React.Component {

  render() {
    const businesses = this.props.businesses.map(business => 
      <Business business={business} />
    );

    return (
      <div className="BusinessList">
        {businesses}
      </div>
    );
  }
}

export default BusinessList;