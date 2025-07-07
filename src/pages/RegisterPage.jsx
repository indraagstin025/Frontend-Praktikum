import { useState } from "react";
import { register } from "../services/authServices"; // Assuming you have a register function
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export function RegisterPage() {
    // We'll include a 'role' field in the form state, defaulting to 'user'
    const [form, setForm] = useState({ username: "", password: "", role: "user" }); 
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Your register service would now take username, password, and role
            await register(form.username, form.password, form.role); 
            Swal.fire("Berhasil", "Registrasi berhasil! Silakan login.", "success");
            navigate("/login"); // Redirect to login page after successful registration
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            // Provide a general error message. Specific errors should come from the backend.
            Swal.fire("Gagal", "Registrasi gagal. Silakan coba lagi.", "error");
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded shadow-md w-full max-w-sm"
            >
                <h2 className="text-xl font-bold mb-6 text-center">Daftar Akun Baru</h2>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={form.username}
                    onChange={handleChange}
                    className="w-full p-2 mb-4 border rounded"
                    required // Make username a required field
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full p-2 mb-6 border rounded"
                    required // Make password a required field
                />

                {/* Role selection - typically for internal admin creation or specific scenarios */}
                <div className="mb-6">
                    <label htmlFor="role" className="block text-gray-700 text-sm font-bold mb-2">
                        Pilih Role:
                    </label>
                    <select
                        id="role"
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                    >
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    Daftar
                </button>
            </form>
        </div>
    );
}