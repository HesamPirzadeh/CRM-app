import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import CustomereditPage from "../../components/Templates/CustomereditPage";

function index() {
  const [data, setData] = useState(null);
  const {
    query: { editId },
    isReady,
  } = useRouter();

  useEffect(() => {
    if (isReady) {
      //   const res = fetch(`api/customer/${editId}`);
      //   const data = res.json();
      //   setData(data.data);
      fetch(`/api/customer/${editId}`)
        .then((res) => res.json())
        .then((data) => setData(data.data));
    }
  }, [isReady]);
  if (data) return <CustomereditPage data={data} id={editId} />;
}

export default index;
