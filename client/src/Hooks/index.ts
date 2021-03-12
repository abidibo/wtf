import React from 'react'

type PaginationHook = [
  number, (arg0: number) => void, any[]
]

export const usePagination = (items: any[], listPerPage: number, initPage: number = 0) : PaginationHook => {
  const [page, setPage] = React.useState(initPage)
  let paginatedItems = [...items]

  const start = (page) * listPerPage
  const end = start + listPerPage

  paginatedItems = paginatedItems.slice(start, end)

  return [page, setPage, paginatedItems]
}

type SortingHook = [
  { field: string, direction: "desc" | "asc" }, (arg0: object) => void, any[]
]

export const useSorting = (items: object[], initSortField: string, initSortDir: "desc" | "asc") : SortingHook => {
  const [sort, setSort] = React.useState({
    field: initSortField,
    direction: initSortDir
  })
  let sortedItems = items

  sortedItems = [...items].sort((a, b) => {
    if (!sort.field) return -1
    const m = sort.direction === 'asc' ? 1 : -1
    if (typeof a[sort.field] === 'string' && typeof b[sort.field] === 'string') {
      return a[sort.field].toLowerCase().localeCompare(b[sort.field].toLowerCase()) * m
    } else {
      return a[sort.field] < b[sort.field] ? -1 * m : 1 * m
    }
  })

  return [sort, setSort, sortedItems]
}


type FullTextSearchHook = [
  string, (arg0: string) => void, any[]
]

export const useFullTextSearch = (items: object[], fields: string[], initSearch: string) : FullTextSearchHook => {
  const [search, setSearch] = React.useState(initSearch)
  let filteredItems = items
  const re = new RegExp(search, 'i')
  filteredItems = [...items].filter(item => {
    if (!search) {
      return true
    }
    for (let i = 0, len = fields.length; i < len; i++) {
      if (re.test(item[fields[i]])) {
        return true
      }
    }
    return false
  })

  return [search, setSearch, filteredItems]
}
