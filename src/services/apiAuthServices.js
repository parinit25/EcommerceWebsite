import { toast } from "react-toastify";

class apiAuthServices {
  static getInstance() {
    return new apiAuthServices();
  }
  signup = async (credentials) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBqXqD9_iNSZyyLcuh4SwNS7tKbEEBSYBc",
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      toast.success("Account Created. Go to Log in Page To continue");
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Sign Up Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };
  login = async (credentials) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBqXqD9_iNSZyyLcuh4SwNS7tKbEEBSYBc",
      {
        method: "POST",
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      toast.success("Log in Success");
      const data = await response.json();
      return data;
    } else {
      const data = await response.json();
      let errorMessage = "Authentication Failed";
      if (data && data.error && data.error.message) {
        errorMessage = data.error.message;
        toast.error(errorMessage);
      }
    }
  };
  getUserProfile = async () => {
    console.log("Heelo world");
    const idToken = localStorage.getItem("idToken");
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyBqXqD9_iNSZyyLcuh4SwNS7tKbEEBSYBc",
      {
        method: "POST",
        body: JSON.stringify({ idToken }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (response.ok) {
      console.log(response);
      //   toast.success("Got data Successfully");
      const data = await response.json();
      return data;
    } else return;
  };
}
export const apiAuthService = apiAuthServices.getInstance();
