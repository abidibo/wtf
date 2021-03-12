import { usePagination } from '../Hooks'

const spySetPage = jest.fn()
jest.mock('react', () => ({
  useState: jest.fn().mockImplementation(v => [v, spySetPage])
}))

describe('Use Pagination Hook', () => {
  it('should slice items properly', () => {
    let items = ['foo', 'bar', 'faz', 'lol', ]
    const [page, setPage, paginatedItems] = usePagination(items, 2)
    expect(page).toBe(0)
    expect(paginatedItems).toEqual(['foo', 'bar', ])
    expect(spySetPage.mock.calls.length).toBe(0)
    setPage(100)
    expect(spySetPage.mock.calls.length).toBe(1)
    expect(spySetPage.mock.calls[0][0]).toBe(100)
  })
})
