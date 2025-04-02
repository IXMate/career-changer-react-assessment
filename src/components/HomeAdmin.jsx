import { Link } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { use } from "react";

const PostUser = () => {
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [position, setPosition] = useState("");
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const createUser = async () => {
          if (!submitted || !name) return;
          setError("");
          setResponse(null);
          try {
            const response = await axios.post(
              "https://jsd5-mock-backend.onrender.com/members",
              { name, lastname, position },
            );
            setResponse(response.data);
            setName("");
            setLastname("");
            setPosition("");
            window.location.reload();
          } catch (err) {
            console.error(err);
            setError("Fail try again");
          } finally {
            setSubmitted(false);
          }
        };

        createUser();

      }, [submitted, name, lastname, position]);

      const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
      };

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
        <form onSubmit={handleSubmit} className="flex gap-[24px]">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              className="border px-2 py-1 block w-full"
            />
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              placeholder="Enter lastname"
              className="border px-2 py-1 block w-full"
            />
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              placeholder="Enter position"
              className="border px-2 py-1 block w-full"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
            >
              Create User
            </button>
          </form>
      </div>
    );
};

const HomeAdmin = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitted, setSubmitted] = useState(false);

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

    const deleteUser = async (id) => {
        try {
          await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
          setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
        } catch (err) {
          console.error(err);
          setError("Failed to delete user. Please try again.");
        }
      };

    return (
    <div className="flex flex-col border gap-[16px] justify-between">
        <div className="flex justify-between">
            <p>Name</p>
            <p>LastName</p>
            <p>Position</p>
        </div>
        <div className="text-center bg-white p-[16px]">
        {users.map((users) => (
            <div className="flex border gap-[16px] justify-between">
                <p>{users.name}</p>
                <p>{users.lastname}</p>
                <p>{users.position}</p>
                <button onClick={() => deleteUser(users.id)} className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700">
                Delete
              </button>
            </div>
          ))}
        </div>
     </div>
    );
  };


  export {HomeAdmin,PostUser};