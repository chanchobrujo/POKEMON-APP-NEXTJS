const value_local: string = 'favorities';

const getFavorites = (): number[] => {
  let favorities: number[] = JSON.parse(localStorage.getItem(value_local) || '[]');
  return favorities;
};

const toggleFavorities = (id: number): void => {
  let favorities: number[] = getFavorites();

  if (favorities.includes(id)) favorities = favorities.filter((pokemon) => pokemon !== id);
  else favorities.push(id);

  localStorage.setItem(value_local, JSON.stringify(favorities));
};

const exitsInFavorities = (id: number): boolean => {
  if (typeof window == 'undefined') return false;

  let favorities: number[] = getFavorites();
  return favorities.includes(id);
};

export default {toggleFavorities, exitsInFavorities, getFavorites};
