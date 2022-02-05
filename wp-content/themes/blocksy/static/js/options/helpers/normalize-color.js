import { colord } from 'colord'

export const normalizeColor = (color) => {
	const parsedColor = colord(color)

	if (!parsedColor.parsed) {
		return color
	}

	if (parsedColor.rgba.a === 1) {
		return parsedColor.toHex()
	}

	return parsedColor.toRgbString()
}
