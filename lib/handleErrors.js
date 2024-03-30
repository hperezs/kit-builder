import { store } from "react-notifications-component";

export const handleErrors = (error) => {
  console.error(error);
  store.addNotification({
    title: "Something went wrong!",
    message: "Please try again later.",
    type: "danger",
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 5000,
      onScreen: true,
    },
  });
};
