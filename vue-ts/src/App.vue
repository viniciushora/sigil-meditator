<template>
  <OptionsSideBar/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import OptionsSideBar from './components/OptionsSideBar.vue';

@Options({
  components: {
    OptionsSideBar,
  },
})
export default class App extends Vue {}
</script>