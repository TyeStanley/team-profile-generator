const Intern = require('../lib/Intern');
const intern = new Intern('Name', 'Id', 'Email', 'School');

test('creates a new Intern Name', () => {
  expect(intern.name).toBe('Name');
})

test('creates a new Intern Id', () => {
  expect(intern.id).toBe('Id');
})

test('creates a new Intern Email', () => {
  expect(intern.email).toBe('Email');
})

test('creates a new Intern School', () => {
  expect(intern.school).toBe('School');
})

test('getSchool() should return School', () => {
  expect(intern.getSchool()).toBe('School');
})

test('getRole() should return Intern', () => {
  expect(intern.getRole()).toBe('Intern');
})