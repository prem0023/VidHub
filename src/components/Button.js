const Button = ({ button }) => {
  return (
    <div className="flex items-center justify-center text-lg rounded-lg px-6 py-3 mt-2 mx-2 bg-slate-100 shadow-md hover:shadow-lg hover:bg-gray-200">
      {button}
    </div>
  );
};

export default Button;
