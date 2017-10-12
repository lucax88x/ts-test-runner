import Greeter from './sample';

describe('Sayings Greeter', () => {
    it('should greet', () => {
        const greeter = new Greeter('John');

        expect(greeter.greet()).toBe('Hello, John');
    });
});
