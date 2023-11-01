import { css } from '@emotion/react'

export const flex = css`
  display: flex;
`

export const flexColumn = css`
  flex-direction: column;
`

export const flexRow = css`
  flex-direction: row;
`

export const flexJustifyCenter = css`
  ${flex}
  justify-content: center;
`

export const flexColumCenter = css`
  ${flexJustifyCenter}
  flex-direction: column;
`

export const flexAlignCenter = css`
  ${flex}
  align-items: center;
`

export const flexJustifyAlignCenter = css`
  ${flex}
  justify-content: center;
  align-items: center;
`

export const flex1 = css`
  flex: 1;
`

export const fullWidth = css`
  width: 100%;
`

export const fullHeight = css`
  height: 100%;
`

export const fullWidthHeight = css`
  ${fullWidth}
  ${fullHeight}
`

export const resetButton = css`
  appearance: none;
  border: 0;
  padding: 0;
  background: none;
  color: white;
  text-align: left;
`

export const cursorPointer = css`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`
