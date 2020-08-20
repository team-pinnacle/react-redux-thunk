import React, { useEffect } from 'react';
import { /*connect,*/ useDispatch, useSelector } from 'react-redux';
import { itemsFetchData } from '../../actions/items';

function ItemList(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const url = 'https://5826ed963900d612000138bd.mockapi.io/items'
    dispatch(itemsFetchData(url));
    // props.fetchData('https://5826ed963900d612000138bd.mockapi.io/items');
  }, []);

  if (state.hasErrored) {
    return <p>Sorry! There was an error loading the items</p>;
  }
  
  if (state.isLoading) {
    return <p>Loading…</p>;
  }
  console.log("rederning");
  return (
    <ul style={{display: 'flex',
                flexWrap: 'wrap'}}>
        {state.items.map((item) => (
            <li key={item.id} style={{background: 'aliceblue', 
                                      padding: '32px 0', 
                                      margin: 4, 
                                      display: 'inline-flex', 
                                      width: '9%', 
                                      justifyContent: 'center', 
                                      alignItems: 'center',
                                      border: 4}}>
                {item.label}
            </li>
        ))}
    </ul>
  );
};

// == useSelector hook
// const mapStateToProps = (state) => {
//   return {
//       items: state.items,
//       hasErrored: state.itemsHasErrored,
//       isLoading: state.itemsIsLoading
//   };
// };

// == useDispatch hook
// const mapDispatchToProps = (dispatch) => {
//   return {
//       fetchData: (url) => dispatch(itemsFetchData(url))
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(ItemList);

export default ItemList;
