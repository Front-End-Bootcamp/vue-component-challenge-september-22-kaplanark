<script setup>
import { defineProps } from 'vue';
const props = defineProps(['person']); // person propunu alıyoruz
</script>

<template>
	<div class="person" :class="props.person.group, props.person.type===null?'':'asistant'">
		<img class="person__image" src="../../../src/assets/profile.jpg" alt="">
		<div class="person__name">
			{{props.person.name}}
		</div>
		<div class="person__type">
			{{props.person.type===null?'student':props.person.type}}
		</div>
	</div>
</template>

<style scoped lang="scss">
.person {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 6px;
	border-radius: 8px;
	padding: 16px;
	transition: all 0.3s ease;

	&:hover {
		transform: scale(1.05);
	}

	&.asistant {
		grid-area: 1;
	}

	&__image {
		width: 72px;
		height: 72px;
		border-radius: 50%;
	}

	&__name {
		font-size: 16px;
	}

	&__type {
		font-size: 12px;
		font-style: italic;
	}
}
</style>