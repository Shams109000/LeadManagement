const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by name or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border p-3 shadow-sm focus:border-blue-500 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;