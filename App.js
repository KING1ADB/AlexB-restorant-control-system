import React from 'react';
import * as Sentry from '@sentry/react-native'; // Import Sentry
import AuthProvider from "./src/context/AuthContext";
import Navigation from "./src/navigation/navigation";
import ErrorBoundary from './src/Errors/ErrorBoundary'; 

// Initialize Sentry
Sentry.init({
  dsn: 'https://5cae68828e2b5d58a10414ba3657cd0c@o4508878925332480.ingest.us.sentry.io/4508878929264640', // Replace with your actual Sentry DSN
  // Additional options can be added here if needed
  tracesSampleRate: 1.0,
});

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </ErrorBoundary>
  );
}
