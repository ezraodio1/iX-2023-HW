import React, {useState, useEffect} from 'react';

import { Book } from '../../models/book';

import BookTable from './BookTable';
import BookForm from './BookForm';

import BookService from '../../services/book-service';

export default function BookPage() {

    const [books, setBooks] = useState([]);
    const [bookToEdit, setBookToEdit] = useState(null);

    useEffect(() => {
        if (!books.length) {
            onInitialLoad();
        }
    }, []);

    async function onInitialLoad() {
        try {
            const books = await BookService.fetchBooks();
            setBooks(books);
        } catch(err) {
            console.log(err);
        }
    } 

    async function onBookCreated(book) {
        const newBook = await BookService.createBook(book);
        setBookToEdit(null);
        setBooks([...books, newBook]);
    }

    async function onBookDelete(bookId) {
        console.log(bookId);
        await BookService.deleteBook(bookId);
        setBooks(books.filter((x) => x.id !== bookId));
    }

    function onBookEdit(book) {
        setBookToEdit(book);
        setBooks(books.filter((x) => x.isbn !== book.isbn));
        onBookDelete(book.id);
    }

    return (
        <div className="m-5">
            <div className="card p-4">
                <BookForm onBookCreated={onBookCreated} bookToEdit={bookToEdit} />
                <BookTable
                    books={books}
                    onBookDelete={onBookDelete}
                    onBookEdit={onBookEdit}
                />
            </div>
        </div>
    );
}
