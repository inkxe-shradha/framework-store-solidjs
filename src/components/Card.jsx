const Card = ({ rounded, flat, children }) => {
  return (
    <div
      class="bg-white p-4 text-center"
      classList={{
        "rounded-md": rounded,
        "shadow-md": !flat,
      }}
    >
      {children}
    </div>
  );
};

export default Card;
