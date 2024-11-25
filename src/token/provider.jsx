import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { CreateToken, ValidateToken } from './api';

const UserContext = createContext({
  token: '',
  setToken: () => {},
  username: '',
  setUsername: () => {},
  updateToken: () => {},
});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('token') || ''); // Initialize from cookie
  const [username, setUsername] = useState(Cookies.get('username') || ''); // Initialize from cookie

  const updateToken = async () => {
    try {
      const new_token = await CreateToken();
      const status_validate_token = await ValidateToken();
      if (status_validate_token === 200) {
        setToken(new_token);
        Cookies.set('token', new_token, { expires: 7 }); // Save the token in a cookie for 7 days
      }
    } catch (error) {
      console.error('Error updating token:', error);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const tokenFromCookie = Cookies.get('token');
        const usernameFromCookie = Cookies.get('username');

        if (!tokenFromCookie) {
          console.log('No token found, generating new token...');
          await updateToken();
        } else {
          setToken(tokenFromCookie);
        }

        if (usernameFromCookie) {
          setUsername(usernameFromCookie); // Set username from cookie
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  return (
    <UserContext.Provider value={{ token, setToken, updateToken, username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };