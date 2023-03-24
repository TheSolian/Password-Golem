import { useEffect, useState } from "react";
import { generatePassword } from "../../util/generator";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import toast, { Toaster } from "react-hot-toast";

function PasswordGenerator() {
  const [password, setPassword] = useState(
    generatePassword(14, true, false, false, false)
  );
  const [length, setLength] = useState(14);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [specialCharacters, setspecialCharacters] = useState(false);

  useEffect(() => {
    if (!lowercase && !uppercase && !numbers && !specialCharacters)
      setLowercase(true);

    setPassword(
      generatePassword(length, lowercase, uppercase, numbers, specialCharacters)
    );
  }, [length, lowercase, uppercase, numbers, specialCharacters]);
  return (
    <>
      <div className="grid place-content-center gap-8 pt-24">
        <div className="absolute top-8">
          <Toaster />
        </div>
        <h1 className="text-3xl text-center">Password Generator</h1>
        <form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="flex-1 flex justify-between">
              <label htmlFor="lowercase">a-z</label>
              <input
                type="checkbox"
                id="lowercase"
                checked={lowercase}
                onChange={(e) => setLowercase(e.target.checked)}
              />
            </div>
            <div className="flex-1 flex justify-between">
              <label htmlFor="uppercase">A-Z</label>
              <input
                type="checkbox"
                id="uppercase"
                checked={uppercase}
                onChange={(e) => setUppercase(e.target.checked)}
              />
            </div>
            <div className="flex-1 flex justify-between">
              <label htmlFor="numbers">0-9</label>
              <input
                type="checkbox"
                id="numbers"
                checked={numbers}
                onChange={(e) => setNumbers(e.target.checked)}
              />
            </div>
            <div className="flex-1 flex justify-between">
              <label htmlFor="specialCharacters">!@#$%^&*+=</label>
              <input
                type="checkbox"
                id="specialCharacters"
                checked={specialCharacters}
                onChange={(e) => setspecialCharacters(e.target.checked)}
              />
            </div>
          </div>
          <div className="flex-1 flex justify-evenly gap-8">
            <label className="my-auto" htmlFor="length">
              Length
            </label>
            <input
              type="number"
              id="length"
              className="w-16"
              min={8}
              max={32}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <input
              className="w-full"
              type="range"
              min={8}
              max={32}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
        </form>
        <div className="w-96 h-12 rounded-md bg-gray-200 flex justify-center items-center relative">
          <span>{password}</span>
          <button
            className="absolute hover:bg-gray-300 w-8 h-8 flex justify-center items-center rounded-full"
            style={{ inset: "auto 1rem auto auto" }}
            onClick={() => {
              navigator.clipboard.writeText(password);
              toast.success("Copied password to clipboard!");
            }}
          >
            <FontAwesomeIcon icon={faCopy} />
          </button>
        </div>
      </div>
    </>
  );
}

export default PasswordGenerator;
