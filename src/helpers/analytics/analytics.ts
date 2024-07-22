import { getJWTToken } from "../jwt/jwt.helpers";

export const sendAnalytics = async () => {
  try {
    const url = process.env.REACT_APP_ANALYTICS_URL as string;
    const authToken = getJWTToken(); // Replace with your method of obtaining the auth token

    const data = JSON.stringify({
      page: window.location.pathname,
      timestamp: Date.now(),
      userAction: "pageUnload"
    });

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}` // Assuming a Bearer token, adjust as needed
      },
      body: data,
      keepalive: true // Important for ensuring the request is sent during page unload
    });
  } catch (error) {
    console.log("Error sending analytics data: ", error);
  }
};
