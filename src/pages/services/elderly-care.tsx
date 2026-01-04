"use client";

import { useState } from "react";
import Head from "next/head";
import { getSupabase } from "../../lib/supabaseClient";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"client" | "service_provider">("client");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSignup = async () => {
    setLoading(true);
    setMessage("");

    const supabase = getSupabase();
    if (!supabase) {
      setMessage("Supabase not available");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      setLoading(false);
      return;
    }

    const user = data.user;

    if (user) {
      const { error: profileError } = await supabase
        .from("profiles")
        .insert(
          {
            id: user.id,
            role,
          } as any
        );

      if (profileError) {
        setMessage(profileError.message);
      } else {
        setMessage("Signup successful. You can now log in.");
      }
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Sign Up | CareKov</title>
      </Head>

      <main className="min-h-screen flex items-center justify-center">
        <div className="w-full max-w-md p-6 border rounded-xl bg-white">
          <h1 className="text-2xl font-bold text-center mb-6">
            Create Account
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

          <select
            className="w-full mb-4 p-3 border rounded"
            value={role}
            onChange={(e) =>
              setRole(e.target.value as "client" | "service_provider")
            }
          >
            <option value="client">Client</option>
            <option value="service_provider">Service Provider</option>
          </select>

          <button
            onClick={handleSignup}
            disabled={loading}
            className="w-full py-3 bg-[#317C82] text-white rounded"
          >
            {loading ? "Creating account..." : "Sign Up"}
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
