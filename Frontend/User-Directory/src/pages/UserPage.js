import React, { useState, useEffect, useMemo } from "react";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar";
import SortControls from "../components/SortControls";
import UserTable from "../components/UserTable";
import Pagination from "../components/Pagination";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterDomain, setFilterDomain] = useState("");
  const [filterLetter, setFilterLetter] = useState("");
  const [sortConfig, setSortConfig] = useState({
    key: "first_name",
    direction: "asc",
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://reqres.in/api/users?page=${page}`
        );
        if (!response.ok)
          throw new Error(`HTTP error! Status: ${response.status}`);
        const data = await response.json();
        setUsers(data.data);
        setTotalPages(data.total_pages);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  const processedUsers = useMemo(() => {
    let filtered = [...users];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (u) =>
          u.first_name.toLowerCase().includes(q) ||
          u.last_name.toLowerCase().includes(q) ||
          u.email.toLowerCase().includes(q)
      );
    }

    if (filterDomain)
      filtered = filtered.filter((u) => u.email.endsWith(filterDomain));
    if (filterLetter)
      filtered = filtered.filter(
        (u) => u.first_name[0].toLowerCase() === filterLetter.toLowerCase()
      );

    if (sortConfig.key) {
      filtered.sort((a, b) => {
        const aValue = String(a[sortConfig.key]).toLowerCase();
        const bValue = String(b[sortConfig.key]).toLowerCase();
        return sortConfig.direction === "asc"
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      });
    }

    return filtered;
  }, [users, searchQuery, filterDomain, filterLetter, sortConfig]);

  const css = `
    :root {
      --bg: #f7f9fc;
      --text: #0f172a;
      --muted: #6b7280;
      --card: #ffffff;
      --border: #e5e7eb;
      --primary: #2563eb;
      --primary-600: #1d4ed8;
      --shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
      --radius: 14px;
    }

    .page {
      min-height: 100vh;
      background: linear-gradient(180deg, var(--bg), #eef2f7);
      padding: 32px 16px;
      font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial;
      color: var(--text);
    }

    .container {
      max-width: 1000px;
      margin: 0 auto;
    }

    .header {
      text-align: center;
      margin-bottom: 20px;
    }

    .title {
      font-weight: 800;
      font-size: 36px;
      letter-spacing: -0.5px;
      display: inline-flex;
      align-items: center;
      gap: 10px;
      color: #0b1220;
    }
    .title .icon {
      color: var(--primary);
      font-size: 32px;
    }

    .subtitle {
      color: var(--muted);
      margin-top: 6px;
      font-size: 14px;
    }

    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .search-card {
      padding: 18px;
      margin: 16px 0 22px;
    }

    .filters-row {
      display: flex;
      align-items: center;
      gap: 14px;
      margin-top: 14px;
      flex-wrap: wrap;
    }
    .filters-label {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #475569;
      font-weight: 600;
      font-size: 14px;
      margin-right: 6px;
    }
    .filters-label svg {
      width: 18px; height: 18px;
      color: #64748b;
    }

    .filters-row select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: #f8fafc;
      border: 1px solid var(--border);
      padding: 10px 36px 10px 12px;
      border-radius: 10px;
      color: #0f172a;
      font-size: 14px;
      cursor: pointer;
      position: relative;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
    }
    .filters-row select {
      background-image:
        linear-gradient(45deg, transparent 50%, #64748b 50%),
        linear-gradient(135deg, #64748b 50%, transparent 50%);
      background-position:
        calc(100% - 20px) calc(50% - 3px),
        calc(100% - 14px) calc(50% - 3px);
      background-size: 6px 6px, 6px 6px;
      background-repeat: no-repeat;
    }
    .filters-row select:focus {
      outline: none;
      border-color: #c7d2fe;
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.15);
    }

    .content-card {
      padding: 18px;
    }

    .table-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
      padding-bottom: 12px;
      margin-bottom: 14px;
    }

    .table-title {
      display: flex;
      align-items: center;
      gap: 10px;
      font-weight: 700;
      color: #111827;
    }
    .count-badge {
      background: #eef2ff;
      color: #3730a3;
      padding: 2px 8px;
      font-size: 12px;
      border-radius: 999px;
      border: 1px solid #e0e7ff;
    }

    .centered {
      text-align: center;
      color: var(--muted);
      padding: 24px 0;
    }

    .content-card table {
      width: 100%;
      border-collapse: collapse;
    }
    .content-card th, .content-card td {
      padding: 10px 12px;
      border-bottom: 1px solid var(--border);
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="page">
        <div className="container">
          <div className="header">
            <div className="title">
              <span className="icon" role="img" aria-label="users">
                👥
              </span>
              User Directory
            </div>
            <div className="subtitle">
              Browse and search through our user database
            </div>
          </div>

          <div className="card search-card">
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />

            <div className="filters-row">
              <span className="filters-label">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    d="M3 5h18l-7 8v5l-4 2v-7L3 5z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Filters:
              </span>
              <FilterBar
                filterDomain={filterDomain}
                setFilterDomain={setFilterDomain}
                filterLetter={filterLetter}
                setFilterLetter={setFilterLetter}
              />
            </div>
          </div>

          <div className="card content-card">
            {!loading && !error && processedUsers.length > 0 && (
              <div className="table-header">
                <div className="table-title">
                  <span role="img" aria-label="list">
                    📄
                  </span>
                  Users
                </div>
                <SortControls
                  sortConfig={sortConfig}
                  setSortConfig={setSortConfig}
                />
              </div>
            )}

            {loading ? (
              <div className="centered">Loading users…</div>
            ) : error ? (
              <div className="centered" style={{ color: "#b91c1c" }}>
                Error: {error}
              </div>
            ) : processedUsers.length === 0 ? (
              <div className="centered">No users found.</div>
            ) : (
              <UserTable users={processedUsers} />
            )}
          </div>

          {/* Pagination */}
          {!loading && !error && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 16,
              }}
            >
              <Pagination
                page={page}
                totalPages={totalPages}
                setPage={setPage}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserPage;
