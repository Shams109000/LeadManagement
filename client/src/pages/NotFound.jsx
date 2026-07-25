import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 px-6">
      <h1 className="mb-4 text-7xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="mb-4 text-2xl font-semibold">
        Page Not Found
      </h2>

      <p className="mb-8 text-center text-gray-600">
        The page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;