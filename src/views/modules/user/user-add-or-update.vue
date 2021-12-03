<script setup>
import useForm from "@/components/use-form";

import { nextTick, reactive, ref } from "vue";
import { isMobile } from "@/utils/validate";

const uForm = ref(null);
const emits = defineEmits(["refreshDataList"]); //方法名

// 表单验证
const validateMobile = (rule, value, callback) => {
  if (!value) {
    callback(new Error("手机号不能为空"));
  } else if (!isMobile(value)) {
    callback(new Error("手机号格式错误"));
  } else {
    callback();
  }
};

const validatorShopId = (rule, value, callback) =>
  !value ? callback(new Error("请选择所属店铺")) : callback();

// 构建表单
const initForm = reactive({
  form: [
    {
      label: "手机号",
      prop: "mobile",
      type: "input",
    },
    {
      label: "所属店家",
      prop: "shopId",
      type: "select",
      option: [{ key: "test", val: 1 }],
    },
    {
      label: "有效期",
      prop: "validity",
      type: "date",
      iSDisabledDate: true,
    },
    {
      label: "用户类型",
      prop: "userType",
      type: "radio",
      option: [
        { key: "用户", val: 0 },
        { key: "管理", val: 1 },
      ],
    },
  ],
  data: {
    mobile: "",
    shopId: "",
    validity: new Date(),
    userType: "",
  },
  rules: {
    mobile: { required: true, validator: validateMobile, trigger: "change" },
    shopId: {
      required: true,
      validator: validatorShopId,
      trigger: "change",
    },
    userType: {
      required: true,
      message: "请设置用户类型",
      trigger: "change",
    },
    validity: {
      required: true,
      message: "请设置有效时间",
      trigger: "blur",
    },
  },
});

const state = reactive({
  dialogFormVisible: false,
  isSubmit: false,
});

// 初始化
const init = (id) => {
  initForm.data["userId"] = id;

  state.dialogFormVisible = true;

  nextTick(() => {
    uForm.value.reset();
  });

  if (id) {
    // ...
  }
};

// 提交
const dataFormSubmit = async () => uForm.value.verify();

// 添加/删除操作
const saveOrupdate = async (form) => {
  state.isSubmit = true;

  try {
    setTimeout(() => {
      state.isSubmit = false;
    }, 3000);
  } catch (err) {
    state.isSubmit = false;
  }
};

defineExpose({
  init,
});
</script>

<template>
  <el-dialog
    :title="initForm.data['userId'] ? '编辑' : '新增'"
    v-model="state.dialogFormVisible"
  >
    <!-- @close="useForm.resetFields()" rules使用change后 自动校验bug -->

    <useForm ref="uForm" :initData="initForm" @successfully="saveOrupdate" />

    <template #footer>
      <span class="dialog-footer">
        <el-button size="medium" @click="state.dialogFormVisible = false">
          取 消
        </el-button>
        <el-button
          :loading="state.isSubmit"
          size="medium"
          type="primary"
          @click="dataFormSubmit"
        >
          确 定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
