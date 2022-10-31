import { useNavigate } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import auth from '@/utils/auth'
import { Button } from '@/components/Button'

export function Landing() {
  const navigate = useNavigate()

  const onClickHandler = () => {
    if (auth.getUser()) {
      navigate('/app')
    } else {
      navigate('/auth/login')
    }
  }

  return (
    <div className="h-screen w-screen">
      <header className="px-4 sm:px-6 py-6 fixed top-0 w-full z-30 bg-white-500">
        <img src={logo} className="h-8 w-auto sm:h-10" alt="logo" />
      </header>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="max-w-6xl mx-auto space-y-10 text-center px-4 md:px-0">
          <h1 className="text-6xl">Welcome to the Shark website</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem sit
            temporibus facilis minus sunt nemo deleniti nesciunt iusto.
            Accusantium provident dolorum, iste reiciendis eveniet dolores illo
            minima nulla voluptatem unde!
          </p>
          <Button text="Get Started" onClick={onClickHandler} />
        </div>
      </div>
    </div>
  )
}
