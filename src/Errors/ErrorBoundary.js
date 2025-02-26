import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Sentry from '@sentry/react-native'; // Ensure you have Sentry installed

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log the error to Sentry
    Sentry.captureException(error);
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false });
    // Optionally, you could reset any relevant state here
  };

  render() {
    if (this.state.hasError) {
      // Fallback UI
      return (
        <View style={styles.container}>
          <Text style={styles.errorText}>Something went wrong.</Text>
          <Button 
            title="Try Again" 
            onPress={this.handleRetry} 
          />
        </View>
      );
    }

    return this.props.children; 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9c2ff',
  },
  errorText: {
    color: 'red',
    fontSize: 18,
    marginBottom: 20,
  },
});

export default ErrorBoundary;