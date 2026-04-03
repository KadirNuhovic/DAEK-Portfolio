"use client";

import React from "react";

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Nešto je pošlo po zlu</h1>
            <p className="text-white/70 mb-8">Došlo je do greške. Molimo vas da osvežite stranicu.</p>
            <button
              onClick={() => this.setState({ hasError: false })}
              className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
            >
              Pokušaj ponovo
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}