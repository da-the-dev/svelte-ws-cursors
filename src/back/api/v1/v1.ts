import WebSocket from 'ws'
import { randomUUID, randomColor } from '../../modules/randomGenerator'

export function startWSServer() {
	const wss = new WebSocket.Server({ port: 7071 })

	wss.on('connection', ws => {
		ws.on('open', () => console.log('A connection established'))

		ws.on('message', rawData => {
			const msg = JSON.parse(rawData.toString())

			switch (msg.event) {
				case 'requestRegister': {
					ws.send(
						JSON.stringify({
							event: 'register',
							data: {
								uuid: randomUUID(),
								color: randomColor(),
							},
						})
					)
				}
			}
		})
	})
}
