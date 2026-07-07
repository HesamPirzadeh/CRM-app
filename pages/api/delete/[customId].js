import Customer from "../../../Models/customer";
import connectDB from "../../../Utils/connectDB";

export default async function handler(req, res) {
  console.log(req);
  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    res
      .status(500)
      .json({ status: "failed", message: "failed connect to server" });
    return;
  }
  if (req.method === "DELETE") {
    const id = req.query.customId;
    try {
      await Customer.deleteOne({ _id: id });
      res
        .status(200)
        .json({ status: "success", message: "Delete item accomplished" });
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ status: "failed", message: "failed to remove item" });
    }
  }
}
