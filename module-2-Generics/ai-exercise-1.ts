type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

function getById<T extends { id: number }>(users: T[], id: number) {
  return users.find(user => user.id === id);
}

export {};
