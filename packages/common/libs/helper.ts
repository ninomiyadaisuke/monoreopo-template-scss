export const idGenerator = () => {
  const idArray = [];
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 15; i++) {
    idArray.push(characters.charAt(Math.floor(Math.random() * characters.length)));
  }
  const id = idArray.join('');
  return id;
};
