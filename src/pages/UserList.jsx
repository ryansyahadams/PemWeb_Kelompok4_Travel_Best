import { useEffect, useState } from "react";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const endpoint = "http://localhost/database_travel/";

  const fetchUsers = async () => {
    try {
      const res = await axios.get(endpoint + "kirim_pesanan.php");
      setUsers(res.data);
    } catch (err) {
      console.error("Gagal fetch users:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Daftar Pengguna</h1>

      {users.length === 0 ? (
        <p>Belum ada user terdaftar.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">Nama</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td className="p-2 border">{user.nama}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">
                  <span
                    className={`px-2 py-1 rounded text-white ${
                      user.role === "admin" ? "bg-red-600" : "bg-blue-600"
                    }`}
                  >
                    {user.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
