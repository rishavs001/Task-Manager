const router = require("express").Router();
const Task = require("../models/task");
const { isValidObjectId } = require("mongoose");
const User = require("../models/user");
const authanticationToken = require("./auth");

// Get all tasks
router.get("/get-all-tasks", authanticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "tasks",
      options: { sort: { createdAt: -1 } },
    });
    return res.status(200).json(userData);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get all incompleted tasks
router.get("/get-all-incomp-tasks", authanticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const incompTaskData = await User.findById(id).populate({
      path: "tasks",
      match: { complete: false },
      options: { sort: { createdAt: -1 } },
    });
    const incompleteTask = incompTaskData.tasks;
    return res.status(200).json(incompleteTask);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get all completed tasks
router.get("/get-all-comp-tasks", authanticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const compTaskData = await User.findById(id).populate({
      path: "tasks",
      match: { complete: true },
      options: { sort: { createdAt: -1 } },
    });
    const completeTask = compTaskData.tasks.filter((task) => task.complete);
    return res.status(200).json(completeTask);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get all important tasks
router.get("/get-all-imp-tasks", authanticationToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const impTaskData = await User.findById(id).populate({
      path: "tasks",
      match: { important: true },
      options: { sort: { createdAt: -1 } },
    });
    const importantTask = impTaskData.tasks.filter((task) => task.important);
    return res.status(200).json(importantTask);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get a single task
router.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the task ID
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Create a new task
router.post("/create-task", authanticationToken, async (req, res) => {
  try {
    const { title, description, dueDate, status, priority } = req.body;
    const userId = req.headers.id; // Assuming id is the user's ID

    let complete = status === "Completed";

    // Check if required fields are provided
    if (!title || !dueDate || !status || !priority) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    // Create a new task
    const newTask = new Task({
      title,
      description,
      dueDate,
      priority,
      status,
      complete,
    });

    await newTask.save();

    // Add the task to the user's tasks
    const user = await User.findByIdAndUpdate(
      userId,
      { $push: { tasks: newTask._id } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res
      .status(201)
      .json({ message: "Task created", taskId: newTask._id });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Update a task
router.put("/update-tasks/:id", authanticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate, priority, complete } = req.body;

    // Validate the task ID
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    // Find the task and update it
    const task = await Task.findByIdAndUpdate(
      id,
      { title, description, dueDate, priority, complete },
      { new: true, runValidators: true }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(task);
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Update a completed task
router.put("/update-comp-tasks/:id", authanticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    const taskData = await Task.findById(id);

    if (!taskData) {
      return res.status(404).json({ message: "Task not found" });
    }

    // Validate the task ID
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }
    const CompTask = taskData.complete;

    if (taskData.status === "Pending") {
      taskData.status = "In Progress";
    } else if (taskData.status === "In Progress") {
      taskData.status = "Completed";
      taskData.complete = !CompTask;
    } else {
      return res.status(200).json({ message: "task already completed" });
    }

    // Save the updated task
    const updatedTask = await taskData.save();

    // console.log(updatedTask);

    return res.status(200).json(updatedTask);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Update a important task
router.put("/update-imp-tasks/:id", authanticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(id, 100);
    // Validate the task ID
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }
    const taskData = await Task.findById(id);
    const ImpTask = taskData.important;
    // Find the task and update its "important" status
    const task = await Task.findByIdAndUpdate(
      id,
      { important: !ImpTask },
      { new: true, runValidators: true }
    );

    // console.log(taskData, 2000);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json(task);
  } catch (err) {
    // console.log(err, 30000);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Delete a task
router.delete("/delete-tasks/:id", authanticationToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.headers.id;
    // console.log(id, 100);
    // Validate the task ID
    if (!isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid task ID" });
    }

    const task = await Task.findByIdAndDelete(id);
    const userData = await User.findByIdAndUpdate(userId, {
      $pull: { tasks: id },
    });
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    return res.status(200).json({ message: "Task deleted" });
  } catch (err) {
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
