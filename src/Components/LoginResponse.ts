interface LoginResponse {
    success: boolean;
    token: string;
  }
  
  export async function login(email: string, password: string): Promise<LoginResponse> {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password }),
      credentials: 'include'
    });
    if (!response.ok) {
      throw new Error('Invalid credentials');
    }
    const data = await response.json();
    return data as LoginResponse;
  }
  