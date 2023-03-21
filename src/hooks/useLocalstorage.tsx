const useLocalstorage = () => {
  const token = localStorage.getItem("userlog");
  return {
    token,
  };
};

export default useLocalstorage;
