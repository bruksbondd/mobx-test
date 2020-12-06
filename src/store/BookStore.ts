import { action, observable, makeObservable} from 'mobx';
import { bookRef } from '../services/firebase'

export function BookStore() {
  return makeObservable (
    {
      books: [
        {
          id: 'eeeddd',
          name: 'Name Serhi',
          secondName: '',
          phone: '4444444',
          photo: 'rrrrrrrrrr'
        },
        {
          id: 'eeee',
          name: 'Name New',
          secondName: '',
          phone: '4444444',
          photo: 'rrrrrrrrrr'
        }
      ],

      setBooks(result: any) {
        this.books = result
      },

      getBooks() {
        bookRef.on('value', (snapshot) => {
          let items = snapshot.val();
          let newState: Array<object> = [];
          for (let item in items) {
            newState.push({
              ...items[item], id: item
            });
          }
          this.setBooks(newState)
        })
        
      },

      removeBook(id: string) {
        bookRef.child(id).remove()
      }
    },
    {
      books: observable,
      getBooks: action.bound,
      setBooks: action.bound,
      removeBook: action.bound
    }
  );
}
