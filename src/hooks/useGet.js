import { useState } from "react";
import { db } from "../firebase-config";
import { collection, getDocs } from "firebase/firestore";
const useGet = (projectType) => {
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(false);
  const [data, setData] = useState([]);
  const projectsCollectionRef = collection(db, projectType);
  const fetch = () => {
    const getProjects = () => {
      setLoading(true);
      setErr(false);
      getDocs(projectsCollectionRef)
        .then((res) => {
          setLoading(false);
          if (res.docs.length > 0) {
            setData(res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
            return;
          }
          //eslint-disable-next-line
          throw "err";
        })
        .catch(() => {
          setLoading(false);
          setErr(true);
        });
    };
    getProjects();
  };
  return [loading, err, data, fetch];
};

export default useGet;
