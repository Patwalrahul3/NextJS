import { connectDb } from "@/helper/db";
import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";
import { NextResponse } from "next/server";

connectDb();

export async function GET() {
  let tasks = [];

  try{
    tasks = await Task.find({});
    console.log(tasks);

  }catch(err){
    // console.log(err);
    // return NextResponse.json({
    //   message: "failed",
    //   success: "false"
    // })
    return getResponseMessage("Error in getting data !",404, false);
  }

  return NextResponse.json(tasks);
}

export async function POST(req) {
  const { title, content , userId  } = await req.json();

 
  try {
    const task = new Task({ title, content , userId });
    const newTask = await task.save();
    return NextResponse.json(newTask, {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json({
      message: "failed to create user",
      status: "false",
    });
  }
}

