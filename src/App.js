
import { useEffect} from 'react';

import BookList from './components/BookList';
import BookCreate  from './components/BookCreate';
import useBooksContext from './hooks/use-books-context';


function App () {

  const { fetchBooks } = useBooksContext();

  // This useEffect is called only one time when our component is 
  // rendered on the screen.
  // We still want to call fetch books when our App component is first displayed.
  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  // The array is called Dependency Array.

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookList/>
      <BookCreate/>
    </div>
  );
}

export default App;