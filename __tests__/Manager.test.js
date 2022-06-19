const Manager = require('../lib/Manager')
const manager = new Manager('Name', 'Id', 'Email', 'Office Number');

test('creates a new Manager Name', () => {
  expect(manager.name).toBe('Name');
})

test('creates a new Manager Id', () => {
  expect(manager.id).toBe('Id');
})

test('creates a new Manager Email', () => {
  expect(manager.email).toBe('Email');
})

test('adds an Office Number to Manager', () => {
  expect(manager.officeNumber).toBe('Office Number');
})

test('getRole() should return Manager', () => {
  expect(manager.getRole()).toBe('Manager');
})