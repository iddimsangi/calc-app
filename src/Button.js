function Button({ button }) {
  return (
    <a
      hrf="#"
      className={`bg-red-800 cursor-pointer text-3xl text-white uppercase rounded-lg flex justify-center items-center p-2 ${
        button === "RESET" || button === "=" ? "col-span-2" : ""
      }`}
    >
      {button}
    </a>
  );
}

export default Button;
