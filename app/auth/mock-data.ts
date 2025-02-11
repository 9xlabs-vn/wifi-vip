export interface User {
  id: string;
  username: string;
  password: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

export const mockUsers: User[] = [
  {
    id: '1',
    username: 'admin',
    password: 'admin123',
    email: 'admin@wifi-vip.com',
    name: 'Admin User',
    role: 'admin'
  },
  {
    id: '2',
    username: 'user',
    password: 'user123',
    email: 'user@example.com',
    name: 'Demo User',
    role: 'user'
  }
];

export const mockAuthDelay = () => new Promise(resolve => setTimeout(resolve, 1000));

export async function mockLogin(username: string, password: string): Promise<User | null> {
  await mockAuthDelay();
  return mockUsers.find(user => user.username === username && user.password === password) || null;
}

export async function mockSocialLogin(provider: 'github' | 'email'): Promise<User | null> {
  await mockAuthDelay();
  // Simulate successful social login with a provider-specific user
  const socialUser = {
    ...mockUsers[0],
    id: `social-${provider}-${Date.now()}`,
    username: `${provider}-user-${Date.now()}`,
  };
  return socialUser;
}