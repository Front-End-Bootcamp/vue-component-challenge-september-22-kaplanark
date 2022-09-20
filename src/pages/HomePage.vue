<script setup>
import DATA from '../assets/json/data.json';
import { ref, onMounted } from 'vue';
import SelectBox from '../components/SelectBox.vue';
import PersonList from '../components/Person/PersonList.vue';

const allPerson = ref([]);
const groupNames = ref([]);
const selectedGroup = ref(null);
const selectedGroupPersons = ref([]);

// tüm kişileri al
const getPersons = async (data) => {
	allPerson.value = await data;
}

// grup isimlerini getir ve groupNames'e ata
const getGroupNames = async (data) => {
	const names = await data.map(person => person.group);
	const uniqueNames = [...new Set(names)]; // unique names
	groupNames.value = uniqueNames;
};

// gruptaki kişileri getir ve selectedGroupPersons'a ata
const getGroupPersons = (groupName) => {
	selectedGroupPersons.value = allPerson.value.filter(person => person.group === groupName);
	selectedGroup.value = groupName;
};

// component aktif olduğunda calışacak fonksiyonlar - getPersons ve getGroupNames fonksiyonlarını çağırıyor
onMounted(() => {
	getGroupNames(DATA);
	getPersons(DATA)
});
</script>

<template>
	<div class="container">
		<SelectBox :groups="groupNames" @getGroupPersons="getGroupPersons" /> <!-- grup isimlerini SelectBox'a gönder -->
		<div class="divider"></div>
		<PersonList :persons="selectedGroupPersons" :group="selectedGroup" /> <!-- grup isimlerini PersonList'e gönder -->
	</div>
</template>