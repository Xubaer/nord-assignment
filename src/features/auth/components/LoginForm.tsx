import { useForm, SubmitHandler } from 'react-hook-form'
import { LockClosedIcon } from '@heroicons/react/20/solid'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import axios, { type AxiosError } from 'axios'
import { useState } from 'react'
import { loginUser } from '../api/login'
import auth from '@/utils/auth'

type Inputs = {
  username: string
  password: string
}

type LoginFormProps = {
  onSuccess: () => void
}

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().min(6).required(),
})

export function LoginForm({ onSuccess }: LoginFormProps) {
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: yupResolver(schema),
  })
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const {
        data: { token },
      } = await loginUser(data)
      auth.setUser(token)
      onSuccess()
    } catch (err: any | AxiosError) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message)
      } else {
        setError(err?.message)
      }
    }
  }

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {error && (
        <p className="text-red-600 text-xs my-2 text-center" role="alert">
          {error}
        </p>
      )}
      <div className="-space-y-px rounded-md shadow-sm">
        <div>
          <label htmlFor="username">
            <input
              id="username"
              type="text"
              autoComplete="email"
              className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Username"
              aria-invalid={errors.username ? 'true' : 'false'}
              {...register('username')}
            />
            <span className="sr-only">Username</span>
            {errors.username && (
              <p className="text-red-600 text-xs mt-1 mb-2" role="alert">
                {errors.username?.message}
              </p>
            )}
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              placeholder="Password"
              aria-invalid={errors.password ? 'true' : 'false'}
              {...register('password')}
            />
            <span className="sr-only">Password</span>
            {errors.password && (
              <p className="text-red-600 text-xs mt-1" role="alert">
                {errors.password?.message}
              </p>
            )}
          </label>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
            <LockClosedIcon
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
              aria-hidden="true"
            />
          </span>
          Login
        </button>
      </div>
    </form>
  )
}
