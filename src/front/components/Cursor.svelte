<script>
export let color = '#00FF00'
export let x = 0
export let y = 0
</script>

<div style={`top:${y - 10}px; left:${x - 10}px`}>
	<svg
		version="1.1"
		id="Layer_1"
		xmlns="http://www.w3.org/2000/svg"
		xmlns:xlink="http://www.w3.org/1999/xlink"
		x="0px"
		y="0px"
		height="32px"
		width="32px"
		viewBox="0 0 28 28"
		enable-background="new 0 0 28 28"
		xml:space="preserve"
	>
		<polygon
			fill="#000000"
			points="8.2,20.9 8.2,4.9 19.8,16.5 13,16.5 12.6,16.6 "
		/>
		<polygon fill="#000000" points="17.3,21.6 13.7,23.1 9,12 12.7,10.5 " />
		<rect
			x="12.5"
			y="13.6"
			fill={color}
			transform="matrix(0.9221 -0.3871 0.3871 0.9221 -5.7605 6.5909)"
			width="2"
			height="8"
		/>
		<polygon
			fill={color}
			points="9.2,7.3 9.2,18.5 12.2,15.6 12.6,15.5 17.4,15.5 "
		/>
	</svg>
</div>

<style>
div {
	position: absolute;
}
</style>
