module.exports = () => {
  const index = Math.floor(Math.random() * 3);
  return ["Hey!", "Hey?", "Hey."][index];
};
