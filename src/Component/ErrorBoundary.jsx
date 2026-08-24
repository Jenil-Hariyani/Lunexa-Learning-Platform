import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, componentStack: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error("App crashed:", error, info?.componentStack);
    this.setState({ componentStack: info?.componentStack || null });
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, componentStack: null });
    window.location.hash = "#/";
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#f4f6fb] px-6 py-12 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Oops! Something went wrong
          </h1>
          <p className="text-gray-500 max-w-md">
            An unexpected error occurred. Please go back to the home page and
            try again.
          </p>
          <button
            onClick={this.handleReset}
            className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-md hover:scale-105 transition"
          >
            Go to Home
          </button>

          {this.state.error && (
            <details className="mt-6 w-full max-w-3xl text-left bg-white border border-gray-200 rounded-xl shadow-sm">
              <summary className="cursor-pointer px-4 py-3 font-semibold text-gray-700 text-sm">
                Debug info (copy this and send it to the developer)
              </summary>
              <div className="px-4 pb-4 space-y-3 overflow-auto">
                <pre className="bg-red-50 text-red-700 text-xs p-3 rounded-lg whitespace-pre-wrap break-words">
                  {String(this.state.error)}
                </pre>
                {this.state.componentStack && (
                  <pre className="bg-gray-50 text-gray-600 text-xs p-3 rounded-lg whitespace-pre-wrap break-words max-h-72 overflow-auto">
                    {this.state.componentStack}
                  </pre>
                )}
              </div>
            </details>
          )}
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
