import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/logooo.png";
import * as XLSX from "xlsx";

function Table({ user }) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [navigate, user]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/users");
        if (!response.ok) {
          throw new Error("Error fetching users");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  const exportToExcel = () => {
    // Convert the users array to an Excel worksheet
    const ws = XLSX.utils.json_to_sheet(users);

    // Create a new workbook and append the worksheet
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Users");

    // Export the workbook to an Excel file
    XLSX.writeFile(wb, "users_data.xlsx");
  };

  return (
    <>
      <nav className="flex justify-between items-center px-5 lg:px-14 bg-white border-b shadow-md">
        <Link to={"/"}>
          <img className="w-20 scale-150" src={logo} alt="logo" />
        </Link>
        <button
          onClick={exportToExcel}
          className="border px-3 bg-[#99DDDE] text-white p-1 rounded-md shadow-sm"
        >
          Export
        </button>
      </nav>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto  shadow-md rounded-lg">
          <thead>
            <tr className="bg-[#99DDDE] text-white">
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Language</th>
              <th className="px-4 py-2 text-left">Email</th>
              <th className="px-4 py-2 text-left">Number</th>
              <th className="px-4 py-2 text-left">Demate Status</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr key={user._id} className="border-t">
                <td className="px-4 py-2">{user.fullName}</td>{" "}
                <td className="px-4 py-2">{user.language || "N/A"}</td>{" "}
                <td className="px-4 py-2">{user.email}</td>{" "}
                <td className="px-4 py-2">{user.mobileNumber}</td>{" "}
                <td className="px-4 py-2">{user.dematStatus}</td>{" "}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Table;
