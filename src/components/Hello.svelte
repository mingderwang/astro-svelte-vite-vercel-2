<script>
	import 'agnostic-svelte/css/common.min.css';
	import { Button } from 'agnostic-svelte';

	let name = 'world';
</script>
<Button mode="primary">Go</Button>
<h1>Hello {name}!</h1>
