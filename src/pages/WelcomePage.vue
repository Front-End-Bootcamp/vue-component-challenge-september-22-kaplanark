<script setup>
import BootcampLogo from "../assets/svg/BootcampLogo.vue"
import router from "./../routes/index"
const homePage = () => {
	router.push("/homepage") // homepage sayfasına yönlendirme - vue-router
}
</script>
	
<template>
	<div class="welcome">
		<BootcampLogo />
		<button class="btn btn-primary" @click="homePage">Go Homepage</button> <!-- homepage sayfasına yönlendiren button -->
	</div>
</template>
	
<style scoped>
.welcome {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
}
.logo {
	height: 6em;
	padding: 1.5em;
	will-change: filter;
}

.logo:hover {
	filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
	filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
	