import { Link } from "react-router-dom";

const HomeNormal = () => {
    return (
      <div className="text-center bg-white p-[16px]">
        <h1 className="text-3xl font-bold mb-4">Generation Thailand <br />React - Assessment</h1>
        <div className="flex gap-[40px] justify-center">
        <Link to="/homeuser">
          <button className="px-4 py-2 bg-[#F0E0D0] text-[#62483A] rounded-md hover:bg-[#62483A]  hover:text-yellow-400 transition duration-300">
            User Home Section
          </button>
        </Link>
        <Link to="/homeadmin">
          <button className="px-4 py-2 bg-[#F0E0D0] text-[#62483A] rounded-md hover:bg-[#62483A]  hover:text-yellow-400 transition duration-300">
            Admin Home Section
          </button>
        </Link>
        </div>
      </div>
    );
  };

  export default HomeNormal;
