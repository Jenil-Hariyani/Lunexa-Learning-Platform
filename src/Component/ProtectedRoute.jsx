import { useUser, useClerk } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded } = useUser();
  const clerk = useClerk();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f4f6fb]">
        <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-600 border-t-transparent"></div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center gap-5 bg-[#f4f6fb] px-6 text-center py-16">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2563eb"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Sign in required
        </h2>
        <p className="text-gray-500 max-w-md">
          This content is available for signed-in members only. Please sign in
          to continue.
        </p>
        <button
          onClick={() =>
            clerk.openSignIn({
              appearance: {
                layout: { type: "modal", modalSize: "medium" },
                variables: {
                  colorPrimary: "#4f46e5",
                  colorBackground: "#ffffff",
                  colorText: "#1f2937",
                  borderRadius: "16px",
                  fontFamily: "'Poppins', sans-serif",
                },
                elements: {
                  modal:
                    "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50",
                  card: "max-w-md w-full shadow-2xl rounded-2xl p-8 bg-white",
                },
              },
            })
          }
          className="px-8 py-3 bg-blue-600 text-white rounded-full shadow-md hover:scale-105 transition"
        >
          Sign In to Continue
        </button>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
