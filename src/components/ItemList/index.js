import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../../actions/items';

function ItemList(props) {
  useEffect(() => {
    props.fetchData('http://5826ed963900d612000138bd.mockapi.io/items');
  }, []);

  if (props.hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }
  
  if (props.isLoading) {
    return <p>Loading…</p>;
  }
  
  return (
    <ul style={{display: 'flex',
      flexWrap: 'wrap'}}>
        {props.items.map((item) => (
            <li key={item.id} style={{background: 'whitesmoke', 
                                      padding: '32px 0', 
                                      margin: 4, 
                                      display: 'inline-flex', 
                                      width: '9%', 
                                      justifyContent: 'center', 
                                      alignItems: 'center'}}>
                {item.label}
            </li>
        ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
      items: state.items,
      hasErrored: state.itemsHasErrored,
      isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
      fetchData: (url) => dispatch(itemsFetchData(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
