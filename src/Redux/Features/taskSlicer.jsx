import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// Fetch All Task
export const fetchTasks = createAsyncThunk("tasks/fetchTasks", async () => {
  const response = await fetch("http://localhost:5000/tasks");
  const data = await response.json();
  return data;
});
// Add New Task
export const addTask = createAsyncThunk("tasks/addTask", async (task) => {
  const response = await fetch("http://localhost:5000/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  const data = await response.json();
  return data;
});
// Delete a task
export const deleteTask = createAsyncThunk("tasks/deleteTask", async (id) => {
  await fetch("http://localhost:5000/tasks/${id}", {
    method: "DELETE",
  });
  return id;
});
// create task slice
export const taskSlice = createSlice({
  name: "Tasks",
  initialState: { tasks: [], loading: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading = false;
      })
      .addCase(fetchTasks.rejected, (state) => {
        state.loading = false;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
