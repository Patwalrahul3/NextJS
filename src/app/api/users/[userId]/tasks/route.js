import { getResponseMessage } from "@/helper/responseMessage";
import { Task } from "@/models/task";

export async function GET(request, {params}){
    const { userId } = params;

    try{
        const tasks  = await Task.find({userId: userId})
        return getResponseMessage(tasks);
    }catch(err){
        return getResponseMessage("no Task found", 500, false);
    }
}