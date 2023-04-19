export const isLoggedIn= ()=>{
  return localStorage.getItem('user');
}

export const loggedIn = (user)=>{
  localStorage.setItem('user', JSON.stringify(user));
}
export const logOut = (user)=>{
  localStorage.removeItem('user');
}