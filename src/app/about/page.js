async function takeTime(){
   await new Promise((resolve) =>{
    setTimeout(resolve, 3000);
   })
}

export default async function about () {
  await takeTime();
  // throw new Error("here is some error");
  return (
    <div>
        <h1>This is About route</h1>
    </div>
  )
}

