const createUserData = (
  id: string,
  email: string,
  name: string,
  profile: string,
) => ({ id: +id, email, name, profile });

export const usersData = [
  ['1', 'test@test.com', 'prueba1', 'administrador'],
  ['2', 'test1@test.com', 'prueba1', 'usuario'],
  ['3', 'test1@test.com', 'prueba1', 'usuario'],
  ['4', 'test@test.com', 'prueba1', 'usuario'],
  ['5', 'test@test.com', 'prueba1', 'usuario'],
  ['6', 'test@test.com', 'prueba1', 'usuario'],
  ['7', 'test@test.com', 'prueba1', 'usuario'],
  ['8', 'test@test.com', 'prueba1', 'usuario'],
  ['9', 'test@test.com', 'prueba1', 'usuario'],
  ['10', 'test@test.com', 'prueba1', 'usuario'],
  ['11', 'test@test.com', 'prueba2', 'usuario'],
  ['12', 'test@test.com', 'prueba2', 'usuario'],
  ['13', 'test@test.com', 'prueba2', 'usuario'],
  ['14', 'test@test.com', 'prueba2', 'usuario'],
  ['15', 'test@test.com', 'prueba2', 'usuario'],
  ['16', 'test@test.com', 'prueba2', 'usuario'],
  ['17', 'test@test.com', 'prueba2', 'usuario'],
  ['18', 'test@test.com', 'prueba2', 'usuario'],
  ['19', 'test@test.com', 'prueba2', 'usuario'],
  ['20', 'test@test.com', 'prueba2', 'usuario'],
].map(([id, email, name, profile]) => createUserData(id, email, name, profile));
