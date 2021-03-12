import React from 'react'
import { render } from '@testing-library/react'
import { withLoader } from '../Decorators'

describe('With Loader decorator', () => {
  it('should return a loader if condition evaluates to true', () => {
    const { getByTestId, queryByTestId } = render(
      withLoader(<div data-testid='test' />, true),
    )
    const dimmer = getByTestId('dimmer')
    const comp = queryByTestId('test')
    expect(comp).toBeNull()
    expect(dimmer).toBeInTheDocument()
  })

  it('should return the component if condition evaluates to false', () => {
    const { getByTestId, queryByTestId } = render(
      withLoader(<div data-testid='test' />, false),
    )
    const dimmer = queryByTestId('dimmer')
    const comp = getByTestId('test')
    expect(comp).toBeInTheDocument()
    expect(dimmer).toBeNull()
  })
})
