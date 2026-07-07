import Link from "next/link";
import { useRouter } from "next/router";

function Card({ customers }) {
  const router = useRouter();
  const deleteHandler = async () => {
    const res = await fetch(`/api/delete/${customers._id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    console.log(data);
    if (data.status === "success") router.reload();
  };
  return (
    <div className="card">
      <div className="card__details">
        <p>
          {customers.name} {customers.lastName}
        </p>
        <p>{customers.email}</p>
      </div>
      <div className="card__buttons">
        <button onClick={deleteHandler}>Remove</button>
        <Link href={`/edit/${customers._id}`}>Edit</Link>
        <Link href={`/customer/${customers._id}`}>Deatil</Link>
      </div>
    </div>
  );
}

export default Card;
