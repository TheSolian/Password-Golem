export function generatePassword(
  length,
  includeLowerCase,
  inludeUppercase,
  includeNumbers,
  includeSpecialCharacters
) {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  const numbers = "0123456789";
  const specialCharacters = "!@#$%^&*+=";

  let allowedCharacters = "";

  if (includeLowerCase) allowedCharacters += lowercase;
  if (inludeUppercase) allowedCharacters += uppercase;
  if (includeNumbers) allowedCharacters += numbers;
  if (includeSpecialCharacters) allowedCharacters += specialCharacters;

  if (length < 8) length = 8;
  if (length > 32) length = 32;

  let password = "";
  for (let i = 0; i < length; i++) {
    password +=
      allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];
  }

  return password;
}
