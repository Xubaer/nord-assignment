import { Header } from './Header'

type MainLayoutProps = {
  children: React.ReactNode
}
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="min-h-full">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        {children}
      </div>
    </div>
  )
}
