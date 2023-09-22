const Button = ({ label, iconURL }) => {
  return (
    <button className="font-montserrat leading-0 bg-coral-red flex items-center justify-center gap-2 rounded-full border px-7 py-4 text-lg text-white">
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow right icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
};

export default Button;
