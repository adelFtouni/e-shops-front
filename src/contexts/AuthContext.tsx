import React, { createContext, useContext, useEffect, useState } from "react";
import type { User, Role } from "../types";

interface AuthContextValue {
  user: User | null;
  login: (name: string, role: Role) => void;
  logout: () => void;
  updatePoints: (delta: number) => void;
  addPurchase: (purchase: Omit<User["purchases"][number], "date">) => void;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const initialUser = (): User | null => {
  const raw = localStorage.getItem("eshops-user");
  if (!raw) return null;
  try {
    return JSON.parse(raw) as User;
  } catch {
    return null;
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => initialUser());

  useEffect(() => {
    if (user) localStorage.setItem("eshops-user", JSON.stringify(user));
    else localStorage.removeItem("eshops-user");
  }, [user]);

  const login = (name: string, role: Role) => {
    const newUser: User = {
      id: `u-${Date.now()}`,
      name,
      role,
      points: 0,
      purchases: []
    };
    setUser(newUser);
  };

  const logout = () => setUser(null);

  const updatePoints = (delta: number) => {
    setUser((u) => {
      if (!u) return u;
      const updated = { ...u, points: Math.max(0, u.points + delta) };
      return updated;
    });
  };

  const addPurchase = (purchase: Omit<User["purchases"][number], "date">) => {
    setUser((u) => {
      if (!u) return u;
      const p = { ...purchase, date: new Date().toISOString() };
      const updated: User = { ...u, purchases: [p, ...u.purchases] };
      return updated;
    });
  };

  return <AuthContext.Provider value={{ user, login, logout, updatePoints, addPurchase }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextValue => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
};
