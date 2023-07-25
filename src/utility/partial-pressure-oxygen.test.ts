import { PartialPressureOfOxygen } from './partial-pressure-oxygen';

describe('Test Partial Pressure of Oxygen Functions', () => {
	it('Ewa', () => {
		expect(
			PartialPressureOfOxygen({ unit: 'meters', depth: 10, FO2: 0.08 })
		).toEqual(0.16);
	});
});
