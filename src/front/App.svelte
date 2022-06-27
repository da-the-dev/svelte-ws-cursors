<script lang="ts">
import { cursors } from './stores'
import Cursor from './components/Cursor.svelte'
import _ from 'lodash'

let uuid = ''
let color = ''

let x = 0
let y = 0

const ws = new WebSocket('ws://192.168.1.127:7071')
ws.addEventListener('open', () => {
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

function onMouseMove(event) {
	x = event.clientX
	y = event.clientY
}

const onMouseMoveThrottled = _.throttle(e => onMouseMove(e), 30, {
	leading: false,
	trailing: true,
})
</script>

<main on:mousemove={onMouseMoveThrottled}>
	<h1>{uuid}</h1>
	<h2>{color}</h2>
	<h2>{color}</h2>
	<Cursor bind:x bind:y color="#00FF00" />
</main>

<style>
main {
	margin: 0;
	height: 100%;
}
</style>
