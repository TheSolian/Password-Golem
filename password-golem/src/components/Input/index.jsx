import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";

function Input({ type, name, id }) {
  const [showPassword, setShowPassword] = useState(false);

  return type !== "password" ? (
    <div className="relative">
      <input
        type={type}
        name={name}
        id={id}
        className="w-full h-full rounded-md"
      />
    </div>
  ) : (
    <div className="relative">
      <input
        className="w-full h-full rounded-md"
        type={showPassword ? "text" : type}
        name={name}
        id={id}
      />
      <button
        className="absolute right-0.5 top-0.5 px-2 py-1.5"
        onClick={() => setShowPassword((prev) => !prev)}
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
    </div>
  );
}

export default Input;
