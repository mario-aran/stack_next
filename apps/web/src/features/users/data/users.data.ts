const createUserData = (
  id: number,
  email: string,
  name: string,
  profile: string,
) => ({ id, email, name, profile });

export const usersData = [
  createUserData(1, 'test@test.com', 'prueba1', 'administrador'),
  createUserData(2, 'test1@test.com', 'prueba1', 'usuario'),
  createUserData(3, 'test1@test.com', 'prueba1', 'usuario'),
  createUserData(4, 'test@test.com', 'prueba1', 'usuario'),
  createUserData(5, 'test@test.com', 'prueba1', 'usuario'),
  createUserData(6, 'test@test.com', 'prueba1', 'usuario'),
  createUserData(7, 'test@test.com', 'prueba1', 'usuario'),
  createUserData(8, 'test@test.com', 'prueba1', 'usuario'),
  createUserData(9, 'test@test.com', 'prueba1', 'usuario'),
  createUserData(10, 'test@test.com', 'prueba1', 'usuario'),
  createUserData(11, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(12, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(13, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(14, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(15, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(16, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(17, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(18, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(19, 'test@test.com', 'prueba2', 'usuario'),
  createUserData(20, 'test@test.com', 'prueba2', 'usuario'),
];
