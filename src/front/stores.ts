import { writable } from 'svelte/store'
import type Cursor from '../shared/interfaces/Cursor'

const cursors = writable([] as Cursor[])
export { cursors }
