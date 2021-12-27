import React from 'react'
import { it } from 'vitest'
import { SWRConfig } from 'swr'
import { render } from '@testing-library/react'

import App from './App'

it('Check response', async () => {
  render(
    <SWRConfig value={{ dedupingInterval: 0 }}>
      <App />
    </SWRConfig>
  )
})

it('Check custom response', async () => {
  const wrapper = ({ children }: { children: React.ReactNode }) => {
    return <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
  }

  const customRender = (ui: React.ReactElement, options?: any) =>
    render(ui, { wrapper, ...options })

  console.log(customRender)
})
