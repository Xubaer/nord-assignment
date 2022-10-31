import { Route, Routes } from 'react-router-dom'
import { List } from '../components/List'

export function ServerRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<List />} />
    </Routes>
  )
}
