import { useNavigate } from 'react-router-dom'
import { Layout } from '../components/Layout'
import { LoginForm } from '../components/LoginForm'

export function Login() {
  const navigate = useNavigate()

  return (
    <Layout heading="Login">
      <LoginForm onSuccess={() => navigate('/app')} />
    </Layout>
  )
}
