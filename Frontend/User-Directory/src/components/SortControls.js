import React from "react";

const SortControls = ({ sortConfig, setSortConfig }) => {
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const baseBtn = {
    border: "1px solid #e5e7eb",
    background: "#f8fafc",
    color: "#0f172a",
    padding: "8px 12px",
    borderRadius: 999,
    fontSize: 13,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
  };

  const activeBtn = {
    ...baseBtn,
    background: "#2563eb",
    color: "#fff",
    borderColor: "#1d4ed8",
  };

  const caret = (dir, active) => (
    <span style={{ fontSize: 12, opacity: active ? 1 : 0.7 }}>
      {dir === "asc" ? "▲" : "▼"}
    </span>
  );

  const isName = sortConfig.key === "first_name";
  const isEmail = sortConfig.key === "email";

  return (
    <div style={{ display: "flex", gap: 10 }}>
      <button
        onClick={() => handleSort("first_name")}
        style={isName ? activeBtn : baseBtn}
        aria-pressed={isName}
        title="Sort by name"
      >
        <span>Name</span>
        {caret(isName ? sortConfig.direction : "asc", isName)}
      </button>
      <button
        onClick={() => handleSort("email")}
        style={isEmail ? activeBtn : baseBtn}
        aria-pressed={isEmail}
        title="Sort by email"
      >
        <span>Email</span>
        {caret(isEmail ? sortConfig.direction : "asc", isEmail)}
      </button>
    </div>
  );
};

export default SortControls;
