import { FormEvent, useState } from "react"

import "./global.css"
import { BasesSelect } from "./components/BasesSelect"
import { IconButton } from "./components/IconButton"
import { validateInput } from "./utils/validate-input"

export function App() {
	const [value, setValue] = useState('')
	const [from, setFrom] = useState('10')
	const [to, setTo] = useState('2')
	const [result, setResult] = useState('')

	function convert(e: FormEvent) {
		e.preventDefault()

		const fromBase = Number(from)
		const toBase = Number(to)

		if (!validateInput(value, fromBase, toBase)) {
			alert('Entrada inválida')
			return
		}

		// converte o valor digitado para a base from (se não considera como decimal)
		const num = parseInt(value, fromBase)

		setResult(num.toString(toBase).toUpperCase())
	}

	function reset() {
		setValue('')
		setFrom('10')
		setTo('2')
		setResult('')
	}

	function swap() {
		const aux = from
		setFrom(to)
		setTo(aux)
	}

	return (
		<div className="h-screen w-screen flex justify-center items-center px-4">
			<div className="bg-neutral-200 rounded p-8">
				<h1 className="text-xl mb-4 font-bold">
					Converta números de uma base numérica para outra
				</h1>

			<form onSubmit={convert}>
				<label htmlFor="number">Digite o número</label>
				<input
					type="text"
					id="number"
					value={value}
					onChange={e => setValue(e.target.value)}
					autoFocus
				/>

				<label htmlFor="from">Da base</label>
				<BasesSelect id="from" value={from} onChange={e => setFrom(e.target.value)} />

				<label htmlFor="to">Para a base</label>
				<BasesSelect id="to" value={to} onChange={e => setTo(e.target.value)} />

				<div className="flex gap-3">
					<IconButton color="blue" icon="equals" type='submit'>Converter</IconButton>

					<IconButton color="yellow" icon="x" onClick={reset}>Reiniciar</IconButton>

					<IconButton color="yellow" icon="shuffle" onClick={swap}>Inverter</IconButton>
				</div>
			</form>

				<label htmlFor="result">Resultado</label>
				<textarea id="result" rows={3} disabled value={result} />

				<IconButton
					color="blue"
					icon="paste"
					onClick={() => navigator.clipboard.writeText(result)}
				>
					Copiar
				</IconButton>
			</div>
		</div>
	)
}
