export interface User {
  username: string;
  email: string;
  password?: string; // Optional because we don't want to return it in getCurrentUser
}

const USERS_KEY = 'learnhub_users';
const CURRENT_USER_KEY = 'learnhub_current_user';

export const auth = {
  getUsers: (): User[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  register: (user: User): { success: boolean; message: string } => {
    const users = auth.getUsers();
    
    // Check if username or email already exists
    const userExists = users.some(
      (u) => u.username === user.username || u.email === user.email
    );

    if (userExists) {
      return { success: false, message: 'Tên đăng nhập hoặc email đã tồn tại.' };
    }

    // Save new user
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return { success: true, message: 'Đăng ký thành công!' };
  },

  login: (username: string, password: string): { success: boolean; message: string; user?: User } => {
    const users = auth.getUsers();
    const user = users.find((u) => u.username === username && u.password === password);

    if (user) {
      // Don't store password in current user session
      const { password: _, ...userWithoutPassword } = user;
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
      return { success: true, message: 'Đăng nhập thành công!', user: userWithoutPassword };
    }

    return { success: false, message: 'Tên đăng nhập hoặc mật khẩu không đúng.' };
  },

  logout: (): void => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  getCurrentUser: (): User | null => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  }
};
