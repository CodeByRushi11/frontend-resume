import React, { useState, useEffect } from "react";
import axios from "axios";

const AxiosApi = () => {
  const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
  });

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // 🚀 Fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await api.get("/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  // ➕ Add new user
  const addUser = async () => {
    if (!formData.name || !formData.email) return;
    setLoading(true);
    try {
      const response = await api.post("/users", formData);
      setUsers([...users, response.data]);
      setFormData({ name: "", email: "" });
    } catch (error) {
      console.error("Error adding user:", error);
    } finally {
      setLoading(false);
    }
  };

  // 🛠️ Start editing
  const startEdit = (user) => {
    setFormData({ name: user.name, email: user.email });
    setEditId(user.id);
    setIsEditing(true);
  };

  // 🔁 Update user
  const updateUser = async () => {
    if (!formData.name || !formData.email) return;
    setLoading(true);
    try {
      const response = await api.put(`/users/${editId}`, formData);
      setUsers(
        users.map((user) =>
          user.id === editId ? { ...user, ...response.data } : user
        )
      );
      setFormData({ name: "", email: "" });
      setEditId(null);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating user:", error);
    } finally {
      setLoading(false);
    }
  };

  // ❌ Delete user
  const deleteUser = async (id) => {
    setLoading(true);
    try {
      await api.delete(`/users/${id}`);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        padding: "30px",
        fontFamily: "Segoe UI",
        maxWidth: "800px",
        margin: "auto",
        backgroundColor: "#f5faff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>
        🛰️ Axios API CRUD in React
      </h2>

      {/* 🔧 Form to Add/Edit User */}
      <div
        style={{
          marginBottom: "20px",
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          style={inputStyle}
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          style={inputStyle}
        />
        {isEditing ? (
          <button onClick={updateUser} style={btnStyle}>
            🔁 Update
          </button>
        ) : (
          <button onClick={addUser} style={btnStyle}>
            ➕ Add
          </button>
        )}
      </div>

      {/* 🔄 Loading indicator */}
      {loading && (
        <p style={{ textAlign: "center", color: "blue" }}>Loading...</p>
      )}

      {/* 📋 Table to show users */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "#fff",
        }}
        border="1"
      >
        <thead style={{ backgroundColor: "#e2e8f0" }}>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={tdStyle}>{user.id}</td>
              <td style={tdStyle}>{user.name}</td>
              <td style={tdStyle}>{user.email}</td>
              <td style={tdStyle}>
                <button
                  onClick={() => startEdit(user)}
                  style={{ ...btnStyle, backgroundColor: "#ffc107" }}
                >
                  ✏️ Edit
                </button>{" "}
                <button
                  onClick={() => deleteUser(user.id)}
                  style={{ ...btnStyle, backgroundColor: "#dc3545" }}
                >
                  🗑️ Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// 🧾 Styles
const btnStyle = {
  padding: "8px 12px",
  fontSize: "14px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#007bff",
  color: "#fff",
  cursor: "pointer",
};

const inputStyle = {
  padding: "8px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "14px",
};

const thStyle = {
  padding: "10px",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
};

export default AxiosApi;
