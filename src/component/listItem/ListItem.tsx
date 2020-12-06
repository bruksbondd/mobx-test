import React, { useState, useEffect, FC } from 'react';

import Divider from '@material-ui/core/Divider';
import Item from './../item/Item';

import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { useHistory } from 'react-router-dom'
import './listItem.scss'
import { useStore } from './../../store/store';

const ListItem: FC = () => {
  const history = useHistory();
  const { bookStore } = useStore();

  useEffect(() => {
    bookStore.getBooks()
  }, [bookStore])

  // const handleAdd = () => {
  //   dispatch(editBook({}))
  //   history.push(`/edit/`);
  // };


  return (
    <div className="contact_list">
      {bookStore.books.map((book: any, i: number) => {
        return (
          <div key={book.id}>
            <Item book={book}/>
            {i < bookStore.books.length - 1 && <Divider/>}
          </div>
        )
      })}
      {/* <Fab className="contact_list_add" onClick={handleAdd} aria-label="add">
        <AddIcon />
      </Fab> */}
    </div>
  );
};
export default ListItem;
