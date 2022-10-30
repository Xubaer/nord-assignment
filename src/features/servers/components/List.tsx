import { useState } from 'react'
import { type ServersResponse, useServers } from '../api'

export function List() {
  const { data, error, isLoading } = useServers()
  const [orderBy, setOrderBy] = useState('name')

  if (error instanceof Error) {
    return <span>Error: {error.message}</span>
  }

  if (isLoading) {
    return <span>Loading . . .</span>
  }

  const sortData = (current: ServersResponse, next: ServersResponse) => {
    if (orderBy === 'name') {
      const currentName = current.name.toUpperCase()
      const nextName = next.name.toUpperCase()
      if (currentName < nextName) return 1
      if (currentName > nextName) return -1
      return 0
    }
    return next.distance - current.distance
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between mb-10">
        <h1 className="text-2xl">List of Servers</h1>

        <div className="w-full md:w-60">
          <label
            htmlFor="order"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
          >
            <span className="sr-only">Order By</span>
            <select
              id="order"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setOrderBy(e.target.value)}
              defaultValue=""
            >
              <option selected>Order by</option>
              <option value="name">Name</option>
              <option value="distance">Distance</option>
            </select>
          </label>
        </div>
      </div>

      <ul className="w-full">
        {data!.sort(sortData).map((server, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li className="flex justify-between" key={`item-${index}`}>
              <span>{server.name}</span>
              <span>{server.distance}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
