const baseurl = process.env.NODE_ENV === 'production' 
  ? "https://football-management-server-1.onrender.com"
  : "http://localhost:3003";

export default baseurl