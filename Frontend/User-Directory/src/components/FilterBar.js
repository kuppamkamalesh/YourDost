import React from "react";

const FilterBar = ({
  filterDomain,
  setFilterDomain,
  filterLetter,
  setFilterLetter,
}) => {
  const css = `
    :root {
      --border: #e5e7eb;
      --muted: #64748b;
      --text: #0f172a;
      --input-bg: #f8fafc;
      --focus: rgba(59, 130, 246, 0.15);
    }

    .fb {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 12px 14px;
      width: 100%;
    }

    .fb-field {
      display: flex;
      flex-direction: column;
      gap: 6px;
      min-width: 180px;
    }

    .fb-label {
      font-size: 12px;
      color: var(--muted);
      font-weight: 600;
      letter-spacing: 0.2px;
    }

    .fb-select {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: var(--input-bg);
      border: 1px solid var(--border);
      color: var(--text);
      border-radius: 10px;
      padding: 10px 36px 10px 12px;
      height: 40px;
      font-size: 14px;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.4);
      transition: box-shadow 140ms ease, border-color 140ms ease, background 140ms ease;
    }

    .fb-select {
      background-image:
        linear-gradient(45deg, transparent 50%, #64748b 50%),
        linear-gradient(135deg, #64748b 50%, transparent 50%);
      background-position:
        calc(100% - 20px) calc(50% - 3px),
        calc(100% - 14px) calc(50% - 3px);
      background-size: 6px 6px, 6px 6px;
      background-repeat: no-repeat;
    }

    .fb-select:hover {
      background: #ffffff;
      border-color: #d4d8e0;
    }

    .fb-select:focus {
      outline: none;
      border-color: #c7d2fe;
      box-shadow: 0 0 0 4px var(--focus);
      background: #fff;
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="fb">
        <div className="fb-field">
          <label className="fb-label">Email Domain</label>
          <select
            value={filterDomain}
            onChange={(e) => setFilterDomain(e.target.value)}
            className="fb-select"
          >
            <option value="">All</option>
            <option value="@reqres.in">@reqres.in</option>
          </select>
        </div>

        <div className="fb-field">
          <label className="fb-label">First Letter</label>
          <select
            value={filterLetter}
            onChange={(e) => setFilterLetter(e.target.value)}
            className="fb-select"
          >
            <option value="">All</option>
            {"abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
              <option key={letter} value={letter}>
                {letter.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
