import Swal from "sweetalert2";
const showSuccessMessage = (message) => {
  Swal.fire({
    position: "center-center",
    icon: "success",
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
};
const showErrorMessage = (message) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
};
const extractUserInfoFromToken = (token) => {
  if (!token) {
    return null; // Handle the case when the token is not provided
  }

  const [, payloadB64] = token.split(".");
  if (!payloadB64) {
    return null;
  }

  try {
    const payload = JSON.parse(
      atob(payloadB64.replace(/-/g, "+").replace(/_/g, "/"))
    );

    const { email, role } = payload;

    return { email, role };
  } catch (error) {
    console.error("Error parsing token:", error);
    return null;
  }
};
export { showSuccessMessage, showErrorMessage, extractUserInfoFromToken };
