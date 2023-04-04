import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import PasswordGenerator from '../../components/PasswordGenerator'
import { generatePassword } from '../../util/generator'

function GeneratorPage() {
  return <PasswordGenerator />
}

export default GeneratorPage
