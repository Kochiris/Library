import types from "./types";
import Books from "./../mocks/Books.json";

interface Book {
  Id: number;
  Name: string;
  Author: string;
  Publisher: string;
  isCompleted: boolean;
  isEditing: boolean;
}

const BOOKS = {
  list: Books,
  lastId: 3,
  returnedBooks: 0,
  Show: false,
};

function booksReducer(state = BOOKS, action: any) {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        list: [
          ...state.list,
          {
            Name: action.Name,
            Author: action.Author,
            Publisher: action.Publisher,
            id: state.lastId,
            isEditing: false,
          },
        ],
        lastId: state.lastId + 1,
      };
    case types.REMOVE:
      return {
        ...state,
        list: [...state.list].filter((book: Book) => book.Id !== action.Id),
      };
    case types.START_EDITING:
      return {
        ...state,
        list: state.list.map((book: any) => {
          if (book.Id === action.Id) {
            book.isEditing = true;
          }
          return book;
        }),
      };
    case types.STOP_EDITING:
      return {
        ...state,
        list: state.list.map((book: any) => {
          if (book.Id === action.Id) {
            book.isEditing = false;
            book.Name = action.Name;
            book.Author = action.Author;
            book.Publisher = action.Publisher;
          }
          return book;
        }),
      };
    case types.COMPLETE:
      return {
        ...state,
        returnedBooks: state.returnedBooks + 1,
        list: state.list.map((book: any) => {
          if (book.Id === action.Id) {
            book.isCompleted = true;
          }

          return book;
        }),
      };
    case types.SHOW:
      return {
        ...state,
        Show: !state.Show,
      };
    case types.INFO:
      return {
        ...state,

        list: state.list.map((book: any) => {
          if (book.Id === action.Id) {
            book.showInfo = !book.showInfo;
          }

          return book;
        }),
      };
    default:
      return state;
  }
}

export default booksReducer;
