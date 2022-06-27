import { randomColor } from './randomGenerator'

test('test random color generation', () => {
	for (let i = 0; i < 1000; i++) {
		expect(randomColor()).toHaveLength(7)
		expect(randomColor()).toMatch(/[0123456789ABCDEF]/g)
	}
})
