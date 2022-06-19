const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Name', 'Id', 'Email', 'GitHub');

test('creates a new Engineer Name', () => {
  expect(engineer.name).toBe('Name');
})

test('creates a new Engineer Id', () => {
  expect(engineer.id).toBe('Id');
})

test('creates a new Engineer Email', () => {
  expect(engineer.email).toBe('Email');
})

test('creates a new Engineer Github', () => {
  expect(engineer.github).toBe('GitHub');
})

test('getGithub() should return GitHub', () => {
  expect(engineer.getGithub()).toBe('GitHub');
})

test('getRole() should return Engineer', () => {
  expect(engineer.getRole()).toBe('Engineer');
})