import axios from "axios";
import { useCallback, useState } from "react";
import { User } from "../types/api/user";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(() => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch(() => {});
  }, []);

  return { getUsers, loading, users };
};
