import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

const HomeUser = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            setError("");
            setLoading(true);

            try {
                const response = await axios.get("https://jsd5-mock-backend.onrender.com/members");
                setUsers(response.data);
                console.log(response);
            } catch (err) {
                console.error(err);
                setError("Fail try again.")
            } finally {
                setLoading(false);
            }
        };
        fetchUsers();
    }, []);

    return (
      <div className="text-center bg-white p-[16px]">
        <h1 className="text-3xl font-bold mb-4">Generation Thailand <br />React - Assessment</h1>
        <div className="flex gap-[40px] justify-center">
        <Link to="/homeuser">
          <button className="px-4 py-2 bg-[#F0E0D0] text-white rounded-md hover:bg-[#62483A] transition durution">
            User Home Section
          </button>
        </Link>
        <Link to="/homeadmin">
          <button className="px-4 py-2 bg-[#F0E0D0] text-white rounded-md hover:bg-[#62483A] transition">
            Admin Home Section
          </button>
        </Link>
        </div>
        <h1 className="p-[16px]">This is Test section</h1>
        <div className="flex border gap-[16px] justify-between">
                <p>Name</p>
                <p>LastName</p>
                <p>Position</p>
        </div>
        {users.map((users) => (
            <div className="flex border gap-[16px] justify-between">
                <p>{users.name}</p>
                <p>{users.lastname}</p>
                <p>{users.position}</p>
            </div>
          ))}
      </div>
    );
  };

  export default HomeUser;