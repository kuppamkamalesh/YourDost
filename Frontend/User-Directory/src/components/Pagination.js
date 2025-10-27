import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  const css = `
    :root {
      --border: #e5e7eb;
      --muted: #64748b;
      --text: #0f172a;
      --btn: #f8fafc;
      --btn-hover: #eef2f7;
      --primary: #2563eb;
      --primary-600: #1d4ed8;
    }

    .pg {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 12px;
      margin-top: 16px;
      flex-wrap: wrap;
    }

    .pg-btn {
      border: 1px solid var(--border);
      background: var(--btn);
      color: var(--text);
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 14px;
      cursor: pointer;
      display: inline-flex;
      gap: 8px;
      align-items: center;
      transition: background 140ms ease, border-color 140ms ease, transform 80ms ease;
    }
    .pg-btn:hover:not([disabled]) {
      background: var(--btn-hover);
    }
    .pg-btn:active:not([disabled]) {
      transform: translateY(1px);
    }
    .pg-btn[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .pg-status {
      border: 1px solid var(--border);
      background: #ffffff;
      color: var(--muted);
      padding: 8px 14px;
      border-radius: 999px;
      font-size: 14px;
    }
    .pg-status strong {
      color: var(--primary-600);
      font-weight: 700;
      margin: 0 4px;
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="pg">
        <button
          onClick={() => setPage((p) => Math.max(1, p - 1))}
          disabled={page === 1}
          className="pg-btn"
          aria-label="Previous page"
        >
          ← Prev
        </button>

        <div className="pg-status">
          Page <strong>{page}</strong> of {totalPages}
        </div>

        <button
          onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
          disabled={page === totalPages}
          className="pg-btn"
          aria-label="Next page"
        >
          Next →
        </button>
      </div>
    </>
  );
};

export default Pagination;
