<script setup>
import { defineProps } from 'vue';
import { defineEmits } from 'vue';
import { ref } from 'vue';
const props = defineProps(['groups']);
const selectedGroup = ref(null);
const emits = defineEmits(['getGroupPersons']); // getGroupPersons fonksiyonunu emit ediyoruz
const getGroupPersons = () => { // grup isimlerinden birini seçtiğimizde çalışacak fonksiyon
	emits('getGroupPersons', selectedGroup.value);
}
</script>
<template>
	<div class="select-box">
		<select class="select-conrol" v-model="selectedGroup">
			<option :value="null" selected hidden>Select Group</option>
			<option v-for="group in props.groups" :key="group" :value="group">{{group}}</option> <!-- grup isimlerini option olarak göster -->
		</select>
		<button class="btn btn-secondary" @click="getGroupPersons">Get Group</button> <!-- butona tıklandığında getGroupPersons fonksiyonunu çalıştır -->
	</div>
</template>

<style scoped>
.select-box {
	display: flex;
	justify-content: center;
	align-items: flex-end;
	gap: 16px;
}
</style>