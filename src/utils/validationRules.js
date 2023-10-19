export const isRequired = value => ({
  hasPassed: !!value,
  message: 'The field must not empty!',
});

export const charLimit = limit => value => ({  
  hasPassed: value.toString().length <= limit,
  message: 'Chars are too many then must be!',
});
