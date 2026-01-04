"use client";

import { useState } from "react";
import Head from "next/head";
import { getSupabase } from "../lib/supabaseClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    setLoading(true);
    setMessage("");

    const supabase = getSupabase();
    if (!supabase) {
      setMessage("Supabase not available");
      setLoading(false);
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Login successful");
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Login | CareKov</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-6 border rounded-xl bg-white">
          <h1 className="text-2xl font-bold text-center mb-6">
            Login
          </h1>

          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-3 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 p-3 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full py-3 bg-[#317C82] text-white rounded"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {message && (
            <p className="mt-4 text-center text-sm text-gray-600">
              {message}
            </p>
          )}
        </div>
      </main>
    </>
  );
}
