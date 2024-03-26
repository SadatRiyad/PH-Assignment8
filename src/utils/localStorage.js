import { toast } from "react-toastify";

export const saveToLocalStorage = (data) => {
  const savedData = JSON.parse(localStorage.getItem("books")) || [];

  const existed = savedData.find((book) => book.bookId == data.bookId);

  if (!existed) {
    savedData.push(data);
    localStorage.setItem("books", JSON.stringify(savedData));
  } else {
    toast("This product already exists in your cart", {
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

export const getFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("books")) || [];
    return data;
}


// export const saveToLocalStorage1 = (data) => {
//   const savedData = JSON.parse(localStorage.getItem("books")) || [];

//   const existed = savedData.find((book) => book.bookId == data.bookId);

//   if (!existed) {
//     savedData.push(data);
//     localStorage.setItem("books", JSON.stringify(savedData));
//   } else {
//     toast("Books are added to Wishlist Successfully", {
//       position: "top-right",
//       autoClose: 2000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: false,
//       draggable: true,
//       progress: undefined,
//     });
//   }
// };



// export { saveToLocalStorage};
