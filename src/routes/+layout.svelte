<script>
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	import '../app.css';
</script>

<Header />

<main class="flex-1 flex items-center">
	<slot />
</main>

<Footer />
