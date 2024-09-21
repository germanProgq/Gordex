import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { CreateToken, ValidateToken } from './api';

const UserContext = createContext({
  token: '',
  setToken: () => {},
  updateToken: () => {},
});

const UserProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const updateToken = async () => {
    try {
      const new_token = await CreateToken()
      const status_validate_token = await ValidateToken()
      if (status_validate_token == 200) {
        setToken(new_token)
      }
    } catch (error) {
      console.error('Error updating token:', error);
    }
  };

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = Cookies.get('token')

        if (!token) {
          console.log('No token found, generating new token...');
          await updateToken();
        } else {
          setToken(token);
        }
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  return (   
    <UserContext.Provider value={{ token, setToken, updateToken }}>
      {children} {}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
