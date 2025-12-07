import React from 'react'
import { Card, CardContent } from './ui/Card'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('Error caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card className="border-destructive/50 bg-destructive/10">
          <CardContent className="pt-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-full bg-destructive/20 flex items-center justify-center">
                  <span className="text-destructive font-bold">!</span>
                </div>
                <h3 className="font-semibold text-destructive">Something went wrong</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                An unexpected error occurred. Please refresh the page or try again later.
              </p>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <details className="mt-4 p-2 bg-muted rounded text-xs">
                  <summary className="cursor-pointer font-mono font-bold">Error details</summary>
                  <p className="mt-2 font-mono text-destructive/80 whitespace-pre-wrap break-words">
                    {this.state.error.toString()}
                  </p>
                </details>
              )}
            </div>
          </CardContent>
        </Card>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary