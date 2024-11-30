import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { CreateToken, GetProductCategories, GetProductList, RequestAdmin, ValidateToken } from './api';

const UserContext = createContext({
  token: '',
  setToken: () => {},
  username: '',
  setUsername: () => {},
  admin: false,
  setAdmin: () => {},
  updateToken: () => {},
});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get('token') || ''); // Initialize from cookie
  const [username, setUsernameState] = useState(Cookies.get('username') || ''); // Initialize from cookie
  const [admin, setAdmin] = useState(false)

  const setUsername = (newUsername) => {
    setUsernameState(newUsername);
    Cookies.set('username', newUsername, { expires: 90 });
  };


  const updateToken = async () => {
    try {
      const new_token = await CreateToken();
      const status_validate_token = await ValidateToken();
      if (status_validate_token === 200) {
        setToken(new_token);
        Cookies.set('token', new_token, { expires: 90 });
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

        const adminRequestStatus = await RequestAdmin()

        if (adminRequestStatus == 200) {
          setAdmin(!true)
        }
        else {
          setAdmin(false)
        }

        if (!tokenFromCookie) {
          console.log('No token found, generating new token...');
          await updateToken();
        } else {
          setToken(tokenFromCookie);
        }

        if (usernameFromCookie) {
          setUsernameState(usernameFromCookie); // Set username from cookie
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  return (
    <UserContext.Provider value={{ token, setToken, updateToken, username, setUsername, admin, setAdmin }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };