import React from "react";

const UserTable = ({ users }) => {
  const css = `
    :root {
      --card: #ffffff;
      --border: #e5e7eb;
      --muted: #64748b;
      --text: #0f172a;
      --primary: #2563eb;
      --row-hover: #f1f5ff;
      --radius: 14px;
      --shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
    }

    .ut-card {
      margin-top: 16px;
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      box-shadow: var(--shadow);
    }

    .ut-scroll {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
      border-radius: inherit;
    }

    .ut-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 14px;
      color: var(--text);
      min-width: 620px; /* keeps columns readable on small screens */
    }

    .ut-thead th {
      background: #f8fafc;
      color: #334155;
      font-weight: 700;
      text-align: left;
      padding: 14px 16px;
      border-bottom: 1px solid var(--border);
      letter-spacing: 0.2px;
    }

    .ut-tbody td {
      padding: 14px 16px;
      border-bottom: 1px solid var(--border);
      vertical-align: middle;
    }

    .ut-row {
      transition: background 160ms ease, transform 100ms ease;
    }

    .ut-row:nth-child(even) {
      background: #fcfdff;
    }

    .ut-row:hover {
      background: var(--row-hover);
    }

    .ut-avatar-cell {
      width: 72px;
      text-align: center;
    }

    .ut-avatar {
      width: 44px;
      height: 44px;
      border-radius: 999px;
      object-fit: cover;
      border: 2px solid #eef2f7;
      box-shadow: 0 2px 8px rgba(15,23,42,0.08);
      transition: transform 160ms ease, box-shadow 160ms ease;
    }

    .ut-row:hover .ut-avatar {
      transform: scale(1.03);
      box-shadow: 0 4px 14px rgba(37, 99, 235, 0.18);
    }

    .ut-name {
      font-weight: 600;
      color: #111827;
      letter-spacing: 0.2px;
    }

    .ut-email {
      color: var(--muted);
      font-size: 13.5px;
    }

    .ut-row:focus-within {
      outline: 2px solid rgba(37, 99, 235, 0.25);
      outline-offset: -2px;
      background: var(--row-hover);
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="ut-card">
        <div className="ut-scroll">
          <table className="ut-table">
            <thead className="ut-thead">
              <tr>
                <th>Avatar</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>

            <tbody className="ut-tbody">
              {users.map((u, index) => (
                <tr key={u.id} className="ut-row">
                  <td className="ut-avatar-cell">
                    <img
                      src={u.avatar}
                      alt={`${u.first_name} ${u.last_name}`}
                      className="ut-avatar"
                      width="50"
                      height="50"
                    />
                  </td>

                  <td>
                    <div className="ut-name">
                      {u.first_name} {u.last_name}
                    </div>
                  </td>

                  <td>
                    <span className="ut-email">{u.email}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default UserTable;
