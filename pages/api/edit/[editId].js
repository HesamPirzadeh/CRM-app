import Customer from "../../../Models/customer";
import connectDB from "../../../Utils/connectDB";

export default async function (req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "failed", message: "failed to connect DB" });
    return;
  }
  if (req.method === "PATCH") {
    const id = req.query.editId;
    const data = req.body.data;
    try {
      const customer = await Customer.findOne({ _id: id });
      customer.name = data.name;
      customer.lastName = data.lastName;
      customer.email = data.email;
      customer.phone = data.phone;
      customer.address = data.address;
      customer.products = data.products;
      customer.date = data.date;
      customer.postalCode = data.date;
      customer.updatedAt = Date.now();
      customer.save();

      res
        .status(200)
        .json({ status: "success", message: "data Updated", data: customer });
    } catch (err) {
      console.log(err.message);
      res
        .status(500)
        .json({ status: "failed", message: "failed to update data" });
    }
  }
}
