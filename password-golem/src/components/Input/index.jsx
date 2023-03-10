import { useState } from "react";

function Input({ type, name, id }) {
  const [showPassword, setShowPassword] = useState(false);

  return type !== "password" ? (
    <input type={type} name={name} id={id} />
  ) : (
    <div className="relative">
      <input
        className="w-full h-full"
        type={showPassword ? "text" : type}
        name={name}
        id={id}
      />
      <button
        className="absolute right-4 top-auto bottom-auto left-auto bg-accent-500 px-2 py-3"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        Show/Hide
      </button>
    </div>
  );
}

export default Input;
