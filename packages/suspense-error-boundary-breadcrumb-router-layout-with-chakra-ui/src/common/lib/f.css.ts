import { css } from '@emotion/react'

const flex = css`
  display: flex;
`

const flexColumn = css`
  flex-direction: column;
`

const flexRow = css`
  flex-direction: row;
`

const flexJustifyCenter = css`
  ${flex}
  justify-content: center;
`

const flexColumCenter = css`
  ${flexJustifyCenter}
  flex-direction: column;
`

const flexAlignCenter = css`
  ${flex}
  align-items: center;
`

const flexJustifyAlignCenter = css`
  ${flex}
  justify-content: center;
  align-items: center;
`

const flex1 = css`
  flex: 1;
`

const fullWidth = css`
  width: 100%;
`

const fullHeight = css`
  height: 100%;
`

const fullWidthHeight = css`
  ${fullWidth}
  ${fullHeight}
`

const resetButton = css`
  appearance: none;
  border: 0;
  padding: 0;
  background: none;
  color: white;
  text-align: left;
`

const cursorPointer = css`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`

export const f = {
  flex,
  flexColumn,
  flexRow,
  flexJustifyCenter,
  flexColumCenter,
  flexAlignCenter,
  flexJustifyAlignCenter,
  flex1,
  fullWidth,
  fullHeight,
  fullWidthHeight,
  resetButton,
  cursorPointer,
}
