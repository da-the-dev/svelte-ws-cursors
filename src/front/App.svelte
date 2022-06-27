<script lang="ts">
import { cursors } from './stores'

let uuid = ''
let color = ''

const ws = new WebSocket('ws://192.168.1.127:7071')
ws.addEventListener('open', event => {
	ws.send(
		JSON.stringify({
			event: 'requestRegister',
		})
	)
})

ws.addEventListener('message', event => {
	const msg = JSON.parse(event.data.toString())

	switch (msg.event) {
		case 'register': {
			uuid = msg.data.uuid
			color = msg.data.color
		}
		case 'cursors': {
			$cursors = msg.data.cursors
		}
	}
})
</script>

<main>
	<h1>{uuid}</h1>
	<h2>{color}</h2>
	<h2>{color}</h2>
</main>
