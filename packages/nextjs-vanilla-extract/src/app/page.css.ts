import { style, styleVariants } from '@vanilla-extract/css'

export const myStyle = style({
  display: 'flex',
  paddingTop: '3px',
  fontSize: '42px',
  color: 'teal',
  fontWeight: 'bold',
})

export const base = style({ padding: 12 })

export const secondary = style([base, { background: 'aqua' }])

export const initialButtonStyle = style({
  outline: 'none',
  border: 'none',
  borderRadius: 6,
  cursor: 'pointer',
  boxSizing: 'border-box',
  fontSize: '1rem',
  height: '2.5rem',
  minWidth: '2.5rem',
  paddingLeft: '1em',
  paddingRight: '1em',
  transition: 'all 0.2s ease-out',
  ':disabled': {
    filter: 'grayscale(15%)',
    cursor: 'not-allowed',
    opacity: 0.6,
  },
  ':focus-visible': {
    boxShadow: '0 0 0.5rem #8d92e9e4',
  },
})

export const solidButton = style([
  initialButtonStyle,
  {
    background: '#8d92e9',
    color: 'rgba(255, 255, 255, 1)',
    ':hover': {
      background: '#767fd2',
    },
    ':active': {
      background: '#a2a6ed',
    },
  },
])

export const outLineButton = style([
  initialButtonStyle,
  {
    border: '1px solid #8d92e9',
    background: 'transparent',
    color: '#8d92e9',
    ':hover': {
      background: '#f4f4fd',
    },
    ':active': {
      background: '#d7d9f8',
    },
  },
])

export const ghostButton = style([
  initialButtonStyle,
  {
    background: 'transparent',
    color: '#8d92e9',
    ':hover': {
      background: '#f4f4fd',
    },
    ':active': {
      background: '#d7d9f8',
    },
  },
])

export const linkButton = style([
  initialButtonStyle,
  {
    background: 'transparent',
    color: '#8d92e9',
    ':hover': {
      textDecoration: 'underline',
      textDecorationThickness: 2.5,
    },
    ':active': {
      color: '#6a71b9',
      textDecoration: 'underline',
      textDecorationThickness: 2.5,
    },
  },
])

export const button = styleVariants({
  solid: [solidButton],
  outline: [outLineButton],
  ghost: [ghostButton],
  link: [linkButton],
})
