import Home from "../components/Templates/Home";
import Customer from "../Models/customer";
import connectDB from "../Utils/connectDB";

function index({ customers }) {
  console.log(customers);
  return (
    <div>
      <Home customers={customers} />
    </div>
  );
}

export default index;

export async function getServerSideProps() {
  await connectDB();
  const customer = await Customer.find();

  return {
    props: {
      customers: JSON.parse(JSON.stringify(customer)),
    },
  };
}
