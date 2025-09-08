
import { useState, useEffect } from 'react';
import { Layout } from 'antd';
import type { Book, BookFormData, BookStats } from './types/book';
import Header from './components/Header';
import SummaryCards from './components/SummaryCards';
import SearchAndFilter from './components/SearchAndFilter';
import BookList from './components/BookList';
import AddBookModal from './components/AddBookModal';
import EditBookModal from './components/EditBookModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import './App.css';

const { Content } = Layout;

const initialBooks: Book[] = [
  {
    id: 1,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert Martin",
    genre: "Công nghệ",
    publishedYear: 2008,
    quantity: 15,
    available: 15,
    isbn: "978-0132350884",
    status: "available"
  },
  {
    id: 2,
    title: "Đắc Nhân Tâm",
    author: "Dale Carnegie",
    genre: "Tâm lý học",
    publishedYear: 1936,
    quantity: 20,
    available: 0,
    isbn: "978-0061120084",
    status: "out_of_stock"
  },
  {
    id: 3,
    title: "Tôi tài giỏi, bạn cũng thế",
    author: "Adam Khoo",
    genre: "Phát triển bản thân",
    publishedYear: 2005,
    quantity: 8,
    available: 8,
    isbn: "978-981-05-5021-8",
    status: "available"
  },
  {
    id: 4,
    title: "Nhà giả kim",
    author: "Paulo Coelho",
    genre: "Tiểu thuyết",
    publishedYear: 1988,
    quantity: 10,
    available: 10,
    isbn: "978-0061120085",
    status: "available"
  }
];

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('Tất cả thể loại');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [deletingBook, setDeletingBook] = useState<Book | null>(null);

  // Load books from localStorage on component mount
  useEffect(() => {
    const savedBooks = localStorage.getItem('library-books');
    if (savedBooks) {
      setBooks(JSON.parse(savedBooks));
    } else {
      setBooks(initialBooks);
      localStorage.setItem('library-books', JSON.stringify(initialBooks));
    }
  }, []);

  // Update filtered books when books, search term, or genre changes
  useEffect(() => {
    let filtered = books;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(book => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by genre
    if (selectedGenre !== 'Tất cả thể loại') {
      filtered = filtered.filter(book => book.genre === selectedGenre);
    }

    setFilteredBooks(filtered);
  }, [books, searchTerm, selectedGenre]);

  const handleAddBook = (bookData: BookFormData) => {
    const newBook: Book = {
      id: Math.max(...books.map(b => b.id), 0) + 1,
      ...bookData,
      available: bookData.status === 'available' ? bookData.quantity : 0
    };
    
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    localStorage.setItem('library-books', JSON.stringify(updatedBooks));
    setIsAddModalOpen(false);
  };

  const handleEditBook = (bookData: BookFormData) => {
    if (!editingBook) return;

    const updatedBooks = books.map(book => 
      book.id === editingBook.id 
        ? {
            ...book,
            ...bookData,
            available: bookData.status === 'available' ? bookData.quantity : 0
          }
        : book
    );
    
    setBooks(updatedBooks);
    localStorage.setItem('library-books', JSON.stringify(updatedBooks));
    setIsEditModalOpen(false);
    setEditingBook(null);
  };

  const handleDeleteBook = () => {
    if (!deletingBook) return;

    const updatedBooks = books.filter(book => book.id !== deletingBook.id);
    setBooks(updatedBooks);
    localStorage.setItem('library-books', JSON.stringify(updatedBooks));
    setIsDeleteModalOpen(false);
    setDeletingBook(null);
  };

  const openEditModal = (book: Book) => {
    setEditingBook(book);
    setIsEditModalOpen(true);
  };

  const openDeleteModal = (book: Book) => {
    setDeletingBook(book);
    setIsDeleteModalOpen(true);
  };

  const getBookStats = (): BookStats => {
    return {
      totalBooks: books.length,
      availableBooks: books.filter(book => book.status === 'available').length,
      outOfStockBooks: books.filter(book => book.status === 'out_of_stock').length
    };
  };

  const getUniqueGenres = () => {
    const genres = [...new Set(books.map(book => book.genre))];
    return ['Tất cả thể loại', ...genres];
  };

  return (
    <Layout className="app">
      <Header />
      
      <Content className="main-content">
        <SummaryCards stats={getBookStats()} />
        
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          genres={getUniqueGenres()}
          onAddBook={() => setIsAddModalOpen(true)}
        />
        
        <BookList
          books={filteredBooks}
          onEdit={openEditModal}
          onDelete={openDeleteModal}
        />
      </Content>

      {isAddModalOpen && (
        <AddBookModal
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddBook}
        />
      )}

      {isEditModalOpen && editingBook && (
        <EditBookModal
          book={editingBook}
          onClose={() => {
            setIsEditModalOpen(false);
            setEditingBook(null);
          }}
          onSave={handleEditBook}
        />
      )}

      {isDeleteModalOpen && deletingBook && (
        <DeleteConfirmModal
          book={deletingBook}
          onClose={() => {
            setIsDeleteModalOpen(false);
            setDeletingBook(null);
          }}
          onConfirm={handleDeleteBook}
        />
      )}
    </Layout>
  );
}