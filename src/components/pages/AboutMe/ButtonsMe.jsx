const ButtonsMe = ({ action }) => {
  const { icon, title, value } = action;
  return (
    <div className="sm:p-5 overflow-hidden bg-color_purple2 flex flex-col items-center max-h-36 ">
      <span>{icon}</span>
      <span className="font-bold text-lg">{title}</span>
      <span>{value}</span>
    </div>
  );
};

export default ButtonsMe;
