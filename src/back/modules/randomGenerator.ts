import { randomUUID } from 'crypto'
const randomColor = () => {
	const source = '0123456789ABCDEF'
	let color = '#'
	for (let i = 0; i < 6; i++) {
		color += source[Math.floor(Math.random() * 10)]
	}
	return color
}
export { randomUUID, randomColor }
