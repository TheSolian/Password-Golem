import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faPlusSquare,
} from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function VaultPage() {
  return (
    <>
      <div className="max-w-xl mx-auto ">
        <div className="flex flex-row place-content-center py-32 justify-between">
          <h1 className="text-2xl py-1.5 mx-8">Your Vault</h1>
          <button className="text-2xl bg-gradient-to-tr text-primary-500 from-secondary-500 to-secondary-700 py-1.5 px-2 rounded-md mx-8 hover:text-primary-600">
            <FontAwesomeIcon icon={faPlus} />
            New Entry
          </button>
        </div>
        <div className="flex flex-row mb-8 bg-gradient-to-tr text-primary-500 from-secondary-500 to-secondary-700 text-xl py-5 px-5 justify-between rounded-lg">
          <p className="my-auto ml-4">Discord</p>
          <div className="bg-accent-400 py-1.5 px-2 rounded-full hover:bg-accent-600">
            <FontAwesomeIcon className="text-secondary-600" icon={faEye} />
          </div>
        </div>
      </div>
    </>
  );
}

export default VaultPage;
