import { useParams } from 'react-router-dom'

function CredentialPage() {
  const { credentialId } = useParams()

  return <div>{credentialId}</div>
}

export default CredentialPage
