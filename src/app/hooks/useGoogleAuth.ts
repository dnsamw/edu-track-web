import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const useGoogleAuth = () => {
  const { setUser } = useContext(UserContext);

  const googleLogin = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const { access_token } = response;
        const profileResponse = await axios.get(
          process.env.REACT_APP_GOOGLE_V3_USER_INFO_URI as string,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        const profileData = profileResponse.data;
        // console.log(profileData);

        setUser(profileData); // Update user context
      } catch (error) {
        console.error("Error retrieving user profile:", error);
      }
    },
    onError: (error) => {
      console.error("Login failed:", error);
    },
    // Optional configurations
    scope: "profile email", // Request profile and email scopes
  });

  return googleLogin;
};

export default useGoogleAuth;
