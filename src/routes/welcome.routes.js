import WelcomePage from '../pages/WelcomePage.vue';

export default [
    { path: '', name: 'welcome', component: WelcomePage },
		{ path: '/:pathMatch(.*)*', redirect: '/' },
]