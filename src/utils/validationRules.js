export const isRequired = value => ({
  hasPassed: !!value,
  message: 'The field must not empty!',
});

export const charLimit = limit => value => ({
  hasPassed: value.toString().length <= limit,
  message: 'Chars are too many then must be!',
});

export const emailValidation = val => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Email is wrong!',
});

export const passwordValidation = val => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d])[a-zA-Z0-9]{7,256}$/.test(val),
  message: 'The password must contain one number!',
});
