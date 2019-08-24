<template>
  <section>
    <h1>subs</h1>
    <pre>{{subs}}</pre>
  </section>
</template>

<script lang="ts">
import { mapState, mapActions } from "vuex";

export default {
  mounted() {
    this.init();
  },
  computed: mapState("subs", ["subs"]),
  methods: mapActions("subs", ["init"])
};
</script>