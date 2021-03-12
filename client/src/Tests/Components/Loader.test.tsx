import React from 'react'
import { render } from '@testing-library/react'
import Loader from '../../Components/Loader'

describe('Loader', () => {
  it('should render', () => {
    const { getByTestId } = render(
      <Loader />,
    )
    const dimmer = getByTestId('dimmer')
    expect(dimmer).toBeInTheDocument()
  })

  it('should contain a progress', () => {
    const { getByRole } = render(
      <Loader />,
    )
    const progress = getByRole('progressbar')
    expect(progress).toBeInTheDocument()
  })
})
