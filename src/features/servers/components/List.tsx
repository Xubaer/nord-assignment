import { useState } from 'react'
import { Loading } from '@/components/Loading'
import { type ServersResponse, useServers } from '../api'
import { type OptionType, SortDropdown } from './SortDropdown'

const dropdownOptions = [
  { id: 1, name: 'Name', value: 'name' },
  { id: 2, name: 'Distance', value: 'distance' },
]

export function List() {
  const { data = [], error, isLoading } = useServers()
  const [orderBy, setOrderBy] = useState(dropdownOptions[0])

  if (error instanceof Error) {
    return <span>Error: {error.message}</span>
  }

  if (isLoading) {
    return <Loading />
  }

  const sortData = (current: ServersResponse, next: ServersResponse) => {
    if (orderBy.value === 'name') {
      const currentName = current.name.toUpperCase()
      const nextName = next.name.toUpperCase()
      if (currentName < nextName) return 1
      if (currentName > nextName) return -1
      return 0
    }
    return next.distance - current.distance
  }

  const onChangeHandler = (option: OptionType) => {
    setOrderBy(option)
  }

  return (
    <div className="max-w-3xl mx-auto">
      <div className="flex justify-between mb-10">
        <h1 className="text-4xl">List of Servers</h1>

        <div className="w-full md:w-60">
          <SortDropdown
            onChange={onChangeHandler}
            options={dropdownOptions}
            selected={orderBy}
          />
        </div>
      </div>

      <ul className="w-full">
        {data.sort(sortData).map((server, index) => {
          return (
            // eslint-disable-next-line react/no-array-index-key
            <li className="flex justify-between pb-4" key={`item-${index}`}>
              <span>{server.name}</span>
              <span>{server.distance}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
