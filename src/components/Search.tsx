import React from 'react'
import { NekoInput } from 'nekohack-ui'

type Props = {
  text: string
  setText: () => void
  label?: string
}

export const Search = (props: Props) => {
  return (
    <div className="search__item">
      <label>{props.text}</label>
      <NekoInput
        value={props.text}
        placeholder="検索してください"
        label={props.label}
        onChange={props.setText}
      />
    </div>
  )
}
