<script setup>
import useForm from "@/components/use-form";
import { reactive, ref } from "vue";

const addOrUpdateRef = ref(null);

const state = reactive({
  initDataInForm: {
    title: "用户",
    byFields: "userId",
    formData: [
      {
        label: "手机号",
        prop: "mobile",
        value: "",
        type: "input",
      },
      {
        label: "所属店家",
        prop: "shopId",
        value: "",
        type: "select",
        option: [{ key: "test", val: 1 }],
      },
      {
        label: "有效期",
        prop: "validity",
        value: new Date(),
        type: "date",
        iSDisabledDate: true,
      },
      {
        label: "用户类型",
        prop: "userType",
        value: "",
        type: "radio",
        option: [
          { key: "用户", val: 0 },
          { key: "管理", val: 1 },
        ],
      },
    ],
  },
});
</script>

<template>
  <el-button size="mini" @click="addOrUpdateRef.init(1)">Click Me</el-button>
  <br />
  <useForm ref="addOrUpdateRef" :initData="state.initDataInForm" />
</template>
<style scoped lang="scss"></style>
