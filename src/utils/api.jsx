const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";

export const saveResume = async (data) => {
  const res = await fetch(`${API_URL}/resumes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};
