import Link from "next/link";
import PropTypes from "prop-types";

export default function SignIn({ error, loading, password, setPassword, setUsername, submit, username }) {
  if (error) {
    error = (
      <div className="p-3 mt-4 text-sm text-center text-red-800 bg-red-100 rounded error">{error}</div>
    );
  }

  return (
    <form className="max-w-sm mx-auto" onSubmit={submit}>
      <label className="block">
        <span className="text-gray-700">Username</span>
        <input type="text" name="username" autoComplete="username" autoFocus="autofocus" required="required" className="block w-full mt-1 form-input focus:outline-none focus:shadow-green-200 focus:border-green-300" value={username} onChange={setUsername} />
      </label>

      <label className="block mt-4">
        <span className="text-gray-700">Password</span>
        <input type="password" name="password" required="required" minLength="6" autoComplete="new-password" className="block w-full mt-1 form-input focus:outline-none focus:shadow-green-200 focus:border-green-300" value={password} onChange={setPassword} />
      </label>

      {error}

      <button type="submit" disabled={loading} className="block w-full py-3 mt-4 font-bold text-white bg-green-600 rounded disabled:cursor-not-allowed disabled:opacity-75 hover:bg-green-700">
        {loading ? "Signing in..." : "Sign In"}
      </button>

      <p className="mt-4 text-sm text-center">
        {"Don't have an account?"} <Link href="/sign-up"><a className="font-normal">Sign up.</a></Link>
      </p>
    </form>
  );
}

SignIn.propTypes = {
  error       : PropTypes.string,
  loading     : PropTypes.bool,
  password    : PropTypes.string,
  setPassword : PropTypes.func,
  setUsername : PropTypes.func,
  submit      : PropTypes.func,
  username    : PropTypes.string
};
