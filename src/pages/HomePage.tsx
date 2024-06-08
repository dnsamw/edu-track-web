import React, { useContext, useEffect } from "react";
import LoginForm from "../components/organisms/LoginForm";
import UserContext from "../app/context/UserContext";
import useGoogleAuth from "../app/hooks/useGoogleAuth";
import { AuthContext } from "../app/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Config } from "../app/config";

type Props = {};

function HomePage({}: Props) {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);
  const googleLogin = useGoogleAuth();

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <LoginForm dispatch={dispatch} />
        <div>
          {!user && (
            <button
              className="rounded-full bg-gray-50 px-8 py-3 text-xl border  hover:bg-gray-300"
              onClick={() => googleLogin()}
            >
              <div className="flex justify-center items-center gap-3">
                <span>
                  <img className="w-8 h-8" src={Config.uiMasterData.googleLogo} />
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
