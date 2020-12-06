import React, { useEffect, FC } from 'react'
import '../App.scss'
import { Search } from '../component/search/Search'

import { useStore } from "../store/store";
import { observer } from 'mobx-react';
import ListItem from './../component/listItem/ListItem';

export const ContactsPage: FC = observer((props) => {
  const { bookStore } = useStore();
  console.log(bookStore.books)
  useEffect(() => {
    bookStore.getBooks()
  }, [bookStore])
  return (
    <div className="contact">
      <h1>Contact</h1>
      <Search />
      <ListItem />
      {/* {bookStore.books.map((i: any) => {
        return (
          <div key={i.id} onClick={() => bookStore.removeBook(i.id)}>{i.name}</div>
        )
      })} */}
    </div>
  )
})