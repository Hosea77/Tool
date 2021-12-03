<script setup>
import { ref } from "vue";

// 定义组件
const addOrupdate = ref(null);

// 定义参数/方法
const props = defineProps({ initData: Object }); //名称:类型
const emits = defineEmits(["successfully"]); //方法名

// 表单验证
const verify = () => {
  addOrupdate.value.validate((valid) => {
    if (valid) emits("successfully", props.initData.data);
  });
};

// 重置表单
const reset = () => addOrupdate.value.resetFields();

// 暴露方法
defineExpose({ verify, reset });
</script>

<template>
  <el-form
    class="use-form"
    label-position="left"
    size="medium"
    ref="addOrupdate"
    :label-width="80"
    :model="initData.data"
    :rules="initData.rules"
  >
    <el-form-item
      v-for="item in initData.form"
      :label="item.label"
      :prop="item.prop"
      :key="item.prop"
    >
      <el-input
        v-if="item.type === 'input'"
        v-model="initData.data[item.prop]"
        placeholder="请输入"
      />
      <el-select
        v-else-if="item.type === 'select'"
        v-model="initData.data[item.prop]"
        placeholder="请选择"
      >
        <el-option
          v-for="items in item.option"
          :label="items.key"
          :value="items.val"
          :key="items.val"
        ></el-option>
      </el-select>
      <el-date-picker
        v-else-if="item.type === 'date'"
        v-model="initData.data[item.prop]"
        type="date"
        placeholder="选择日期"
      />
      <el-radio-group
        v-else-if="item.type === 'radio'"
        v-model="initData.data[item.prop]"
      >
        <el-radio
          v-for="items in item.option"
          :label="items.val"
          :key="items.val"
        >
          {{ items.key }}
        </el-radio>
      </el-radio-group>
    </el-form-item>
  </el-form>
</template>
