import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter } from 'react-router-dom'
import { Fallback } from '@/components/Fallback'

const queryClient = new QueryClient()

function FallbackComponent() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center align-center text-center">
      <h2 className="text-xl">Oops! Something went wrong!</h2>
      <button
        type="button"
        className="p-3 bg-blue-500 hover:bg-blue-600"
        onClick={() => window.location.assign(window.location.origin)}
      >
        Reload
      </button>
    </div>
  )
}

type AppProviderProps = {
  children: React.ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <React.Suspense fallback={<Fallback />}>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>{children}</BrowserRouter>
        </QueryClientProvider>
      </ErrorBoundary>
    </React.Suspense>
  )
}

export default AppProvider
