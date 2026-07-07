import Home from "../components/Templates/Home";
import Customer from "../Models/customer";
import connectDB from "../Utils/connectDB";

function index({ customer }) {
  console.log(customer);
  return (
    <div>
      <Home />
    </div>
  );
}

export default index;

export async function getServerSideProps() {
  await connectDB();
  const customer = await Customer.find();

  return {
    props: {
      customer: JSON.parse(JSON.stringify(customer)),
    },
  };
}
