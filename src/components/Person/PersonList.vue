<script setup>
import { defineProps } from 'vue';
import PersonCard from './PersonCard.vue';
const props = defineProps(['persons', 'group']); // persons ve group propunu alıyoruz
</script>

<template>
	<div class="container">
		<div class="null" v-if="props.group === null">
			<!-- grup seçilmediyse -->
			<img src="../../../src/assets/empty.png" alt="">
		</div>
		<div class="persons" v-else>
			<!-- grup seçildiyse -->
			<div class="persons__title">
				{{props.group}}
			</div>
			<div class="persons__list">
				<PersonCard v-for="person in props.persons" :key="person.id" :person="person" />
				<!-- personCard'a person propunu gönderiyoruz -->
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.container {
	display: flex;
	flex-direction: column;
}

.null {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.persons {
	display: flex;
	flex-direction: column;
	gap: 24px;

	&__title {
		font-size: 24px;
		text-align: center;
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 24px;
	}
}
</style>
