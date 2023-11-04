/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from 'react'

interface Prop {
  fallback: React.ReactNode
  children?: React.ReactNode
}

interface State {
  hasError: boolean
}

export default class CustomErrorBoundary extends Component<Prop, State> {
  constructor(props: Prop) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}
