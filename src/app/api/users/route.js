import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

connectDb();

export async function GET(request) {
  let users = [];

  try{
    users = await User.find({}).select("-password");

  }catch(err){
    console.log(err);
    return NextResponse.json({
      message: "failed",
      success: "false"
    })
  }

  return NextResponse.json(users);
}

export async function POST(req) {
  const { name, email, password, about, profileURL } = await req.json();
 
  const user = new User({ name, email, password, about, profileURL });
 
 
  try {
    user.password = bcrypt.hashSync(user.password, parseInt(process.env.BCRYPT_SALT));
     const newUser = await user.save();
    return NextResponse.json(user, {
      status: 201,
    });
  } catch (err) {
    return NextResponse.json({
      message: "failed to create user",
      status: "false",
    },{
      status: 500,
    });
  }
}

export async function PUT(request, {params}){
  const {userId} = params;

  const {name , password, about , profileURL} = await request.json();

  try{
    const user = await User.findById(userId);
    user.name = name;
    user.password = password;
    user.about = about ;
    user.profileURL = profileURL;


    const updatedUser = await user.save();
    return NextResponse.json(updatedUser);

  }catch(error){
    return NextResponse.json({
      message: "failed to update user !",
      success: false
    })

  }

}