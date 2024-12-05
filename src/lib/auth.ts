export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export async function signUp(email: string, password: string, name: string): Promise<User> {
  // Implement sign up logic here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        name,
        email,
        createdAt: new Date(),
      });
    }, 1000);
  });
}

export async function signIn(email: string, password: string): Promise<User> {
  // Implement sign in logic here
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: '1',
        name: 'John Doe',
        email,
        createdAt: new Date(),
      });
    }, 1000);
  });
}

export async function signOut(): Promise<void> {
  // Implement sign out logic here
  return new Promise((resolve) => {
    setTimeout(resolve, 1000);
  });
}