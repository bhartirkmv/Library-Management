import axios from 'axios';
import { createContext, useState , useCallback} from 'react';

// We are naming it BooksContext because we have defined the 
// file name as books.
const BooksContext = createContext();

// This provider component is going to be called with a prop called children

function Provider ( {children} ) {

  const [books, setBooks] = useState([]);

  // The variables as well as the function is changing with every app 
  // re render.

  // We are wrapping the function we have created by useCallBack.
  const fetchBooks = useCallback(async () => {
    const response = await axios.get('http://localhost:3001/books');

    setBooks(response.data);
  }, []);



  const editBookById = async (id, newTitle) => {

    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle
    });
    
    const updatedBooks = books.map((book) => {
      if(book.id === id) {
        return { ...book , ...response.data}
      }

      return book;
    });

    setBooks(updatedBooks);
  };

  const deleteBookById = async (id) => {

    await axios.delete(`http://localhost:3001/books/${id}`)
    // filter method gives us a brand new array.
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const createBook = async (title) => {

    const response = await axios.post('http://localhost:3001/books', {
      title: title
    })
    const updatedBooks = [ ...books, response.data];

    setBooks(updatedBooks);

  };

  const valueToShare = {
    books,
    deleteBookById,
    editBookById,
    fetchBooks,
    createBook
    
  }

  return (
    <BooksContext.Provider value={valueToShare}>
      {children}
    </BooksContext.Provider>
  );

}


// Since we already have a default export , we are going to have a named export
export { Provider };
export default BooksContext;