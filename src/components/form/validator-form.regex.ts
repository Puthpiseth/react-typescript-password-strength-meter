export const passwordRegex =
  /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
export const nameRegex = /^[a-zA-Z]{2,}$/;
export const atLeastOneUpperCase = /[A-Z]/g;
export const atLeastOneLowerCase = /[a-z]/g;
export const atLeastOneNumberic = /[0-9]/g;
export const atLeastOneSpecialCharacter = /[!@#$%^&*()\-_=+{};:,<.>]/g;
export const atLeastCharactersOrMore = /.{8,}/g;

export const passwordRegexMessage =
  'Password must contain at least 8 characters, one uppercase, one number and one special case character';

export const nameRegexMessage = 'Username must be at least 2 characters and contains only letter';
