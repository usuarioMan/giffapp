// Import the fetchComment function from the specified module.
import { fetchComment } from "../src/codeToTest/asyncDummyCode";

// Create a test suite using the describe function to group related tests.
describe('Testing fetchComment function', () => { 
    // Create a test case using the test function to specify the expected behavior.
    test('should fetch a comment and return its properties in a list', async() => {
        // Call the fetchComment function asynchronously and await its result.
        const commentProps = await fetchComment();
        
        // Use the expect function to make assertions about the behavior of the code under test.
        // Check if the returned value (commentProps) is an array.
        expect(Array.isArray(commentProps)).toBe(true);
    });
});
