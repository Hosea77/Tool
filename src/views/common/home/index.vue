<script setup>
import AddOrUpdate from "@/views/modules/user/user-add-or-update";
import { ref } from "vue";

import { typeOf } from "@/utils";

const addOrUpdateRef = ref(null);
</script>

<template>
  <el-button size="mini" @click="addOrUpdateRef.init(1)">Click Me</el-button>
  <br />
  <AddOrUpdate ref="addOrUpdateRef" />
</template>
