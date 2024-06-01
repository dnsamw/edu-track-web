import { useContext } from "react";
import UserContext from "./app/context/UserContext";
import useGoogleAuth from "./app/hooks/useGoogleAuth";
import NavBar from "./components/NavBar";

function App() {
  const { user, setUser } = useContext(UserContext);
  const googleLogin = useGoogleAuth();

  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center h-screen">
        <div>
          {user ? (
            <div className="flex flex-col justify-center items-center gap-4">
              <p className="text-3xl font-semibold">
                Welcome, {user.given_name}!
              </p>
              <img
                className="rounded-full w-36 h-36"
                src={user.picture}
                alt="Profile Picture"
              />
              {/* Display other profile information */}
            </div>
          ) : (
            <button
              className="rounded-full text-white bg-sky-500 px-16 py-6 text-2xl hover:bg-sky-400"
              onClick={() => googleLogin()}
            >
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
