const Employee = require('../lib/Employee');
const employee = new Employee('Name', 'Id', 'Email');

test('creates a new Employee name', () => {
  expect(employee.name).toBe('Name');
})

test('creates a new Employee id', () => {
  expect(employee.id).toBe('Id');
})

test('creates a new Employee email', () => {
  expect(employee.email).toBe('Email');
})

test('getName() should return Name', () => {
  expect(employee.getName()).toBe('Name');
})

test('getId() should return Id', () => {
  expect(employee.getId()).toBe('Id');
})

test('getEmail() should return Email', () => {
  expect(employee.getEmail()).toBe('Email');
})

test('getRole() should return Employee', () => {
  expect(employee.getRole()).toBe('Employee');
})