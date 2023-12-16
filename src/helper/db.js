import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGO_DB_URL
    //     ,{
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    // }
    );
    console.log("mongodb connected successfully!!!");
    // console.log(connection);

    // testing
    //  const user = new User({
    //   name: "Test",
    //   email: "test@gmail.com",
    //   password: "testpasword",
    //   about: "this is testing"
    //  })

    //  await user.save();
    //  console.log("user created !!!!!!!!")


    console.log(connection.host);
  } catch (error) {
    console.log("Unable to connect to Mongodb.....");
    console.log(error);
  }
};
