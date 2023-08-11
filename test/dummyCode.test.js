// Import the 'add' function from the specified module.
import { add } from '../src/codeToTest/dummyCode.js';

// Create a test suite using the describe function to group related tests.
describe('add', () => {
  // Create a test case using the test function to specify the expected behavior.
  test('should correctly add two positive numbers', () => {
    // Call the 'add' function with arguments 3 and 5, and assign the result to 'result'.
    const result = add(3, 5);
    
    // Use the 'expect' function to make assertions about the behavior of the code under test.
    // Check if the 'result' is equal to the expected value 8.
    expect(result).toBe(8);
  });
});
