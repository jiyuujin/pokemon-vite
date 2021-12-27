import React from 'react'
import { it, expect } from 'vitest'
import renderer from 'react-test-renderer'

import { CardList } from './CardList'

it('Render component', () => {
  const component = renderer.create(
    <CardList
      data={[
        {
          name: 'unown',
          url: 'https://pokeapi.co/api/v2/pokemon/201/',
        },
      ]}
      search={''}
    />
  )
  expect(component).toMatchSnapshot()
})
