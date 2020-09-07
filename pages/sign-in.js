import SignIn from "../components/sign_in";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAuthentcation } from "../providers/authentication";

export default function SignInPage() {
  const router = useRouter();
  const { session, signIn } = useAuthentcation();

  useEffect(() => {
    if (session.user) {
      router.replace("/");
    }
  }, [session]);

  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const setFromEvent = (callback) => {
    return (event) => {
      callback(event.target.value);
    };
  };
  const onSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    signIn(username, password).catch((error) => {
      setError(error.message);
      setLoading(false);
    });
  };

  return (
    <>
      <h1 className="mb-8 text-6xl font-extrabold tracking-tighter text-center text-gray-800">
        Bookmarks
      </h1>

      <SignIn
        error={error}
        loading={loading}
        password={password}
        setPassword={setFromEvent(setPassword)}
        setUsername={setFromEvent(setUsername)}
        submit={onSubmit}
        username={username} />
    </>
  );
}
