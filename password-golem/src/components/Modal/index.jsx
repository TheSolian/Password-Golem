import React from 'react'

function Modal({ isOpen, onClose, children, type, deleteCredential }) {
  return (
    <>
      {isOpen ? (
        <div className='fixed z-10 inset-0 overflow-y-auto'>
          <div className='flex items-center justify-center min-h-screen'>
            <div onClick={onClose} className='fixed inset-0 transition-opacity'>
              <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            </div>
            <div className='bg-white text-black rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full'>
              {children}
              <div className='flex justify-end mt-8 m-4 gap-4'>
                {type === 'credential' && (
                  <button
                    onClick={() => deleteCredential()}
                    className='bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 text-white'
                  >
                    Delete
                  </button>
                )}
                <button
                  onClick={onClose}
                  className='bg-accent-500 px-4 py-2 rounded-md hover:bg-accent-600 text-black'
                >
                  {type === 'edit' ? 'Save' : 'Close'}
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
