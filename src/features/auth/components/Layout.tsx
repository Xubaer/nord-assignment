type LayoutProps = {
  heading: string
  children: React.ReactNode
}

export function Layout({ heading, children }: LayoutProps) {
  return (
    <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h1 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            {heading}
          </h1>
        </div>
        {children}
      </div>
    </div>
  )
}
