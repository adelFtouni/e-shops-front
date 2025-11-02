import React, { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

/**
 * Simple login/register form that stores mock user locally
 */
export const LoginRegisterForm: React.FC = () => {
  const { login } = useAuth();
  const [name, setName] = useState("");
  const [role, setRole] = useState<"customer" | "seller">("customer");
  const navigate = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) { alert("Please enter a name"); return; }
    login(name.trim(), role);
    navigate("/");
  };

  return (
    <form onSubmit={submit} className="max-w-md mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} className="mt-1 block w-full rounded-md border p-2 bg-white dark:bg-gray-700" />
      </div>
      <div>
        <label className="block text-sm font-medium">Role</label>
        <select value={role} onChange={(e)=>setRole(e.target.value as any)} className="mt-1 block w-full rounded-md border p-2 bg-white dark:bg-gray-700">
          <option value="customer">Customer</option>
          <option value="seller">Seller</option>
        </select>
      </div>
      <div className="flex gap-2">
        <button type="submit" className="px-4 py-2 rounded bg-eshopyellow font-medium">Continue</button>
        <button type="button" onClick={() => { setName("Guest User"); setRole("customer"); }} className="px-4 py-2 rounded border">Use Guest</button>
      </div>
    </form>
  );
};
