function Button({ button }) {
  return (
    <a
      hrf="#"
      className={`bg-white cursor-pointer text-3xl text-toggleBackground custom_shadow_btn uppercase rounded-lg flex justify-center items-center p-2 ${
        button === "RESET" || button === "=" ? "col-span-2" : ""
      }`}
    >
      {button}
    </a>
  );
}

export default Button;
