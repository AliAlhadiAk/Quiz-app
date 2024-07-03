import React from 'react';
import ListItems from './ListItems';

const List = ({ items }) => {
  return (
    <div className='table-container'>
      <table>
        <tbody>
          {items.map((item)=>{
            <Row key={item.id} item={item}/>
          })}
        </tbody>
      </table>
    </div>
    
  );
};

export default List;
