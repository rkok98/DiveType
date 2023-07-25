import { DistanceUnit } from 'utility/maximum-operating-depth';

interface PartialPressureOfOxygenOptions {
	unit: DistanceUnit;
	depth: number;
	FO2: number;
}

const PartialPressureOfOxygenMeters = (
	unit: DistanceUnit,
	depth: number,
	FO2: number
): number => {
	// Meter Seawater (msw)
	const msw = 10;

	const ata = 1 + depth / msw;
	return FO2 * ata;
};

const PartialPressureOfOxygenFeet = (
	unit: DistanceUnit,
	depth: number,
	FO2: number
): number => {
	// Feet Seawater (fsw)
	const fsw = 33;

	const ata = 1 + depth / fsw;
	return FO2 * ata;
};

const PartialPressureOfOxygen = (
	options: PartialPressureOfOxygenOptions
): number => {
	const { unit, depth, FO2 } = options;

	if (unit === 'meters') {
		return PartialPressureOfOxygenMeters(unit, depth, FO2);
	}

	if (unit === 'feet') {
		return PartialPressureOfOxygenFeet(unit, depth, FO2);
	}

	throw Error('Distance unit not specified or invalid');
};

export { PartialPressureOfOxygen };
