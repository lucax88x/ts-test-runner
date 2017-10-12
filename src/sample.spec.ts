import { DtoData } from './sample';
import { mock, when, instance, verify } from 'ts-mockito';

describe('Sayings Greeter', () => {
    it('should greet', () => {
        const mockData = mock(DtoData);

        when(mockData.data).thenReturn('test');

        var data = instance(mockData);

        expect(data.data).toBe('test');
    });
});
