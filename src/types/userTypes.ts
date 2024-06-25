// Interface for a User
export interface User {
    id: string;
    name: string;
    email: string;
    bio: string;
    role: 'admin' | 'user' | 'guest'; // Could use an enum for roles too
    status: 'active' | 'inactive' | 'banned'; // Could use an enum for statuses too
  }
  
  // Mock Data for an empty user
  export const EMPTY_USER: User = {
    id: '',
    name: '',
    email: '',
    bio: '',
    role: 'guest',
    status: 'inactive',
  };
  