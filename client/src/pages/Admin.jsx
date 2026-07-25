import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import LeadTable from "../components/LeadTable";
import Loading from "../components/Loading";

import api from "../services/api";

const Admin = () => {
  const navigate = useNavigate();

  const [leads, setLeads] = useState([]);
//   const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  // Fetch Leads
 const fetchLeads = async () => {
  try {
    setLoading(true);

    const { data } = await api.get(`/leads?search=${search}`);

    setLeads(data.leads);
    // setFiltered(data.leads);
  } catch (err) {
    console.error(err);

    if (err.response?.status === 401) {
      localStorage.removeItem("token");
      navigate("/login");
    }
  } finally {
    setLoading(false);
  }
};

  useEffect(() => {
    fetchLeads();
  }, [search]);

  // Update Lead Status
  const updateStatus = async (id, status) => {
    try {
      await api.patch(`/leads/${id}`, { status });

      setLeads((prev) =>
        prev.map((lead) =>
          lead._id === id ? { ...lead, status } : lead
        )
      );

    //   setFiltered((prev) =>
    //     prev.map((lead) =>
    //       lead._id === id ? { ...lead, status } : lead
    //     )
    //   );
    } catch (err) {
      console.error(err);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-slate-100 py-10">
        <div className="mx-auto max-w-7xl px-6">

          {/* Header */}

          <div className="mb-8 flex flex-col gap-4 rounded-xl bg-white p-6 shadow md:flex-row md:items-center md:justify-between">

            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Lead Dashboard
              </h1>

              <p className="mt-1 text-sm text-slate-500">
                Manage all incoming leads from your landing page.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                {leads.length} Leads
              </span>

              <button
                onClick={logout}
                className="rounded-lg bg-red-500 px-5 py-2 font-medium text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            </div>

          </div>

          {/* Search */}

          <SearchBar
            search={search}
            setSearch={setSearch}
          />

          {/* Table */}

          {loading ? (
            <Loading />
          ) : (
            <LeadTable
              leads={leads}
              updateStatus={updateStatus}
            />
          )}

        </div>
      </main>

      <Footer />
    </>
  );
};

export default Admin;