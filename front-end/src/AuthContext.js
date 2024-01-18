import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [userIdNo, setUserIdNo] = useState(null);

  // Function to update user data on successful login
  const handleLogin = async (emailAddress, password) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailAddress, password }),
      });
  
      if (response.ok) {
        const { token, userId } = await response.json();

        setUserIdNo(userId);
        console.log(userIdNo);
  
        // Store token securely (e.g., local storage)
        localStorage.setItem('token', token);
  
        setIsLoggedIn(true);
  
        const fetchUserData = async () => {
          try {
            // Retrieve the token from localStorage (assuming it's stored there after login)
            const token = localStorage.getItem('token'); // Ensure this matches where you store your token
  
            // Make a GET request to your backend API endpoint
            const response = await fetch(`http://localhost:3001/api/v1/users/${userId}`, {
              method: 'GET',
              headers: {
                'Authorization': `Bearer ${token}`, // Include the token in the request headers
                'Content-Type': 'application/json'
              },
            });
  
            if (response.ok) {
              const data = await response.json();
              setUserData(data.data);
              console.log(data); // Set the retrieved user data in the state
            } else {
              // Handle error cases if the request fails
              console.error('Failed to fetch user data');
            }
          } catch (error) {
            console.error('Error fetching user data:', error);
          }
        };
  
        fetchUserData(); // Call the fetchUserData function
      } else {
        // Handle login error
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  
  const handleSignOut = () => {
      // Clear token from local storage
      localStorage.removeItem('token');
      setIsLoggedIn(false);
  
    };


 // Empty dependency array ensures this effect runs once on component mount

  // Other authentication-related functions

  return (
    <AuthContext.Provider value={{ isLoggedIn, userData, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;