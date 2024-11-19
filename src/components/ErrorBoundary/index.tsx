import React, { Component, ReactNode } from 'react';
import {
  ErrorBoundaryContainer,
  ErrorBoundaryContent,
  Text,
} from './ErrorBoundry.styles';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorBoundaryContainer>
          <ErrorBoundaryContent>
            <Text size={'5rem'} weight={500} color={'#393939'}>
              Oops...
            </Text>
            <Text
              size={'1.5rem'}
              weight={400}
              color={'#393939'}
              marginTop={'clamp(20px, 2vw, 40px)'}
            >
              Something went wrong
            </Text>
            <Text
              size={'1rem'}
              weight={400}
              color={'#393939'}
              marginTop={'20px'}
            >
              Try reloading the page or wait until the error is resolved. We are
              already working on eliminating it
            </Text>
          </ErrorBoundaryContent>
        </ErrorBoundaryContainer>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
