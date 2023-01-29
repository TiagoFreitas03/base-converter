const BASES = [2, 8, 10, 16]

export function validateInput(value: string, from: number, to: number) {
	if (!BASES.includes(from) || !BASES.includes(to)) {
		return false
	}

	switch (from) {
		case 2:
			return (/^[01]+$/g).test(value)
		case 8:
			return (/^[0-7]+$/g).test(value)
		case 10:
			return (/^[0-9]+$/g).test(value)
		case 16:
			return (/^[0-9A-Fa-f]+$/g).test(value)
	}

	return false
}
