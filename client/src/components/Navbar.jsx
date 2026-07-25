import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="flex items-center justify-between bg-white px-6 py-5 shadow-sm">
      <Link to="/" className="text-2xl font-bold text-blue-600">
        LeadDesk Mini
      </Link>

      {location.pathname !== "/admin" && (
        <Link
          to="/login"
          className="rounded-lg border border-blue-600 px-4 py-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
        >
          Admin Login
        </Link>
      )}
    </nav>
  );
};

export default Navbar;