import { AuthContext } from "../../utility/AuthContext";
import { useContext, useEffect, useState } from "react";
import { getDataFromStore } from "../../utility/getDataFromStore";

const User = () => {
  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser.uid : localStorage.getItem("userId");

  const [loading, setLoading] = useState(true);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    getDataFromStore(userId).then((res) => {
      setDatas(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {datas.map((data) => {
            return <div key={data.id}>{data.name}</div>;
          })}
        </div>
      )}
    </div>
  );
};

export default User;
