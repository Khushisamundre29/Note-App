export const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const getInitials = (name) => {
  if (!name) return "";  // Handle empty or undefined name.

  const words = name.trim().split(" ");  // Trim whitespace and split by space.
  let initials = "";

  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i][0].toUpperCase();  // Capitalize the first letter of each word.
  }

  return initials;
};
