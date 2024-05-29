export const loginUser = async (credentials: { email: string, password: string }) => {
    const response = await fetch('https://localhost:7284/api/User/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
  
    if (!response.ok) {
      throw new Error('Error logging in');
    }
  
    const { token } = await response.json();
    return token;
  };

  
  