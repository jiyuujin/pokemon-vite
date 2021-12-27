import React from 'react'
import { it, expect } from 'vitest'
import renderer from 'react-test-renderer'
import { render, fireEvent } from '@testing-library/react'

import { Search } from './Search'

const setup = () => {
  const utils = render(
    <Search text={'unown'} setText={() => {}} label={'search-input'} />
  )
  const input: any = utils.getByLabelText('search-input')
  return { input, ...utils }
}

it('Render component', () => {
  const component = renderer.create(
    <Search text={'unown'} setText={() => {}} />
  )
  expect(component).toMatchSnapshot()
})

it('Confirm text', () => {
  const component = render(<Search text={'unown'} setText={() => {}} />)
  expect(component.getAllByText('unown')).toHaveLength(1)
})

it('Confirm text', () => {
  const { input } = setup()
  fireEvent.change(input, { target: { value: 'unown' } })
  expect(input.value).toBe('unown')
})
