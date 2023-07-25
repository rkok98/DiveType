/**
 * Represents a unit of distance, either in meters or feet.
 */
export type DistanceUnit = 'meters' | 'feet';

/**
 * Options for calculating the maximum operating depth.
 */
interface MaximumOperatingDepthOptions {
	/**
	 * The unit of distance to be used for calculating the maximum operating depth.
	 */
	unit: DistanceUnit;

	/**
	 * The partial pressure of oxygen (pO2) in the gas mixture used for diving, expressed in bar (atmospheres).
	 */
	pO2: number;

	/**
	 * The fraction of oxygen (FO2) in the gas mixture used for diving, expressed as a decimal value between 0 and 1.
	 */
	FO2: number;
}

/**
 * Calculates the maximum operating depth in meters based on partial pressure of oxygen and fraction of oxygen.
 * @param pO2 - The partial pressure of oxygen (pO2) in the gas mixture used for diving, expressed in bar (atmospheres).
 * @param FO2 - The fraction of oxygen (FO2) in the gas mixture used for diving, expressed as a decimal value between 0 and 1.
 * @returns The maximum operating depth in meters (msw).
 */
const maximumOperatingDepthMeters = (pO2: number, FO2: number): number => {
	// Meter Seawater (msw)
	const msw = 10;
	return (pO2 / FO2 - 1) * msw;
};

/**
 * Calculates the maximum operating depth in feet based on partial pressure of oxygen and fraction of oxygen.
 * @param pO2 - The partial pressure of oxygen (pO2) in the gas mixture used for diving, expressed in bar (atmospheres).
 * @param FO2 - The fraction of oxygen (FO2) in the gas mixture used for diving, expressed as a decimal value between 0 and 1.
 * @returns The maximum operating depth in feet (fsw).
 */
const maximumOperatingDepthFeet = (pO2: number, FO2: number): number => {
	// Feet Seawater (fsw)
	const fsw = 33;
	return (pO2 / FO2 - 1) * fsw;
};

/**
 * Calculates the maximum operating depth based on the provided options.
 * The result is either in meters or feet depending on the specified distance unit in the options.
 * @param options - The options for calculating the maximum operating depth.
 * @returns The maximum operating depth either in meters (msw) or feet (fsw).
 * @throws Error if the distance unit in the options is not specified or is invalid.
 */
const maximumOperatingDepth = (
	options: MaximumOperatingDepthOptions
): number => {
	const { unit, pO2, FO2 } = options;

	if (FO2 > 1 || FO2 < 0) {
		throw Error('FO2 can not be out of range 0 - 1');
	}

	if (unit === 'meters') {
		return maximumOperatingDepthMeters(pO2, FO2);
	}

	if (unit === 'feet') {
		return maximumOperatingDepthFeet(pO2, FO2);
	}

	throw Error('Distance unit not specified or invalid');
};

export default { maximumOperatingDepth };
