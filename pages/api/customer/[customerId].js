import Customer from "../../../Models/customer";
import connectDB from "../../../Utils/connectDB";

export default async function (req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: "failed", message: "failed to connect DB" });
    return;
  }
  if (req.method === "GET") {
    const id = req.query.customerId;
    try {
      const customer = await Customer.findOne({ _id: id });
      res
        .status(200)
        .json({
          status: "success",
          message: "geting data ,successful",
          data: customer,
        });
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ status: "failed", message: "failed to get data" });
    }
  }
}
