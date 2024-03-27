import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("books")) || [];

  const existed = savedData.find((book) => book.bookId == data.bookId);

  if (!existed) {
    savedData.push(data);
    localStorage.setItem("books", JSON.stringify(savedData));
    toast("Books are added to Read List Successfully", {
      type: "success",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
    // saveToLocalStorage1(existed);
  } else {
    toast("This Book is already in your Read List", {
      type: "info",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
  return { savedData, existed };
};

export const getFromLocalStorage = () => {
  const data = JSON.parse(localStorage.getItem("books")) || [];
  return data;
};

export const saveToLocalStorage1 = (data, existed) => {
  const newSavedData = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
  const isexisted = newSavedData.find((book) => book.bookId == data.bookId);

  if (existed && !isexisted) {
    toast("Can't add to wishlish, Book is already read", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  } else if (!existed && !isexisted) {
    newSavedData.push(data);
    localStorage.setItem("wishlistBooks", JSON.stringify(newSavedData));
    toast("Book added to Wishlist Successfully", {
      type: "success",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  } else {
    toast("This Book is already in your Wishlist", {
      type: "info",
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  }
};

export const getFromLocalStorage1 = () => {
  const data = JSON.parse(localStorage.getItem("wishlistBooks")) || [];
  return data;
};
