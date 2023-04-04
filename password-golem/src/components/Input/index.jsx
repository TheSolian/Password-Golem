import { faEye, faEyeSlash } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

function Input({ type, name, id, required, disabled }) {
  const [showPassword, setShowPassword] = useState(false)

  return type !== 'password' ? (
    <div className='relative'>
      <input
        type={type}
        name={name}
        id={id}
        className={'w-full h-full rounded-md'}
        required={required || false}
        disabled={disabled || false}
      />
    </div>
  ) : (
    <div className='relative flex-grow'>
      <input
        className={'w-full h-full rounded-md'}
        type={showPassword ? 'text' : type}
        name={name}
        id={id}
        required={required || false}
        disabled={disabled || false}
      />
      <button
        type='button'
        className='absolute right-0.5 top-0.5 px-2 py-1.5'
        onClick={() => setShowPassword((prev) => !prev)}
      >
        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
      </button>
    </div>
  )
}

export default Input
