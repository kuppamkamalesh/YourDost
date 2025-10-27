import React from "react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: 12,
          padding: "10px 12px",
          boxShadow: "inset 0 1px 0 rgba(255,255,255,0.5)",
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#64748b"
          style={{ flexShrink: 0 }}
        >
          <circle cx="11" cy="11" r="7" strokeWidth="1.6" />
          <path d="M20 20l-3.5-3.5" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            fontSize: 14,
            color: "#0f172a",
            background: "transparent",
            padding: "6px 2px",
          }}
        />
      </div>
    </div>
  );
};

export default SearchBar;
