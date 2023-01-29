import { SelectHTMLAttributes } from 'react'

export function BasesSelect(props: SelectHTMLAttributes<HTMLSelectElement>) {
	return (
		<select {...props}>
			<option value='2'>2 (Binária)</option>
			<option value='8'>8 (Octal)</option>
			<option value='10'>10 (Decimal)</option>
			<option value='16'>16 (Hexadecimal)</option>
		</select>
	)
}
