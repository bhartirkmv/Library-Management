import { useState, useContext } from 'react';
import BooksContext from '../context/books';

function BookEdit ({ book, onSubmit }) {

  const { editBookById} = useContext(BooksContext);
  const [title, setTitle] = useState(book.title);

  const handleChange = (event) => {
    setTitle(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // We still need to call onSubmit, because we need to tell BookSHow , that 
    // It needs to close the form.
    onSubmit();
    editBookById(book.id, title);
    
    
  }
  return (
    <form className='book-edit' onSubmit={handleSubmit}>
      <label>
        Title
      </label>
      <input className='input' value= { title } onChange= {handleChange}/>
      <button className='button is-primary'>
        Save
      </button>
    </form>
  );
}

export default BookEdit;