const useLocalstorage = () => {
  const token = localStorage.getItem("userlog");
  const idToken = localStorage.getItem("gameID");
  return {
    token,
    idToken,
  };
};

export default useLocalstorage;
