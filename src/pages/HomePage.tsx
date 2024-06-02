import React, { useContext } from "react";
import LoginForm from "../components/organisms/LoginForm";
import UserContext from "../app/context/UserContext";
import useGoogleAuth from "../app/hooks/useGoogleAuth";
import { AuthContext } from "../app/context/AuthContext";

type Props = {};

function HomePage({}: Props) {
  const { dispatch } = useContext(AuthContext);

  const { user } = useContext(UserContext);
  const googleLogin = useGoogleAuth();
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <LoginForm dispatch={dispatch} />
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
              className="rounded-full bg-gray-50 px-16 py-4 text-2xl border  hover:bg-gray-300"
              onClick={() => googleLogin()}
            >
              <div className="flex justify-center items-center gap-3">
                <span>
                  <img className="w-8 h-8" src="/img/google_g_logo.svg" />
                </span>
                <span>Sign in with Google</span>
              </div>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default HomePage;
