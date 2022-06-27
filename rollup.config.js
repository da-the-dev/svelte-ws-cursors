import svelte from 'rollup-plugin-svelte';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';
import css from 'rollup-plugin-css-only';

const production = !process.env.ROLLUP_WATCH;

function serve() {
	let buildServer;
	let runServer

	function toExit() {
		if(buildServer) buildServer.kill(0);
		if(runServer) runServer.kill(0);
	}

	return {
		writeBundle() {
			if(buildServer) return;
			buildServer = require('child_process').spawn('nodemon', ['dist/index.js'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			runServer = require('child_process').spawn('tsc', ['-w', '-p', 'tsconfig.backend.json'], {
				stdio: ['ignore', 'inherit', 'inherit'],
				shell: true
			});

			process.on('SIGTERM', toExit);
			process.on('exit', toExit);
		}
	};
}

export default {
	input: 'src/front/main.ts',
	output: {
		sourcemap: true,
		format: 'iife',
		name: 'app',
		file: 'public/build/bundle.js'
	},
	plugins: [
		svelte({
			preprocess: sveltePreprocess({ sourceMap: !production }),
			compilerOptions: {
				dev: !production
			}
		}),

		css({ output: 'bundle.css' }),

		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({
			sourceMap: !production,
			inlineSources: !production
		}),

		!production && serve(),
		!production && livereload('public'),
		production && start()
	],
	watch: {
		clearScreen: false
	}
};
