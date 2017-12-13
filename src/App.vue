<template>
	<div>
		<app-topNav	/>
		<router-view></router-view>
	</div>
</template>

<script>
import TopNav from './components/TopNav'
	export default {
    name: 'app',
		components: {
			'app-topNav': TopNav
		}
  }
</script>

<style>

</style>