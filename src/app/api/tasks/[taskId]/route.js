import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { taskId } = params;
    const task = await Task.findById(taskId);
    return NextResponse.json(task);
  } catch (e) {
    return getResponseMessage("Error in getting task!", 404, false);
  }
}

export async function DELETE(request, { params }) {
  const { taskId } = params;

  try {
    await Task.deleteOne({
      _id: taskId,
    });

    return NextResponse.json({
      message: "Task deleted.",
      success: true,
    });
  } catch (err) {
    console.log("error", err);
   return getResponseMessage("user not delted", 404, false);
  }
}

export async function PUT(request, { params }) {
  try {
    const { taskId } = params;
    const { title, content, status } = await request.json();

    let task = await Task.findById(taskId);
    console.log("before task", task);

    if (!task) {
      return getResponseMessage("Task not found", 404, false);
    }

    task.title = title;
    task.content = content;
    task.status = status;

    const updatedTask = await task.save();
    console.log("after task", updatedTask);

    return NextResponse.json(updatedTask);
  } catch (error) {
    console.error("Error updating task:", error);
    return getResponseMessage("Failed to update task", 500, false);
  }
}

