<script setup>
import { reactive } from "vue";
import { Edit, Delete } from "@element-plus/icons";

import { HeaderCellStyle } from "@/utils/element";

const TableColumn = [
  {
    label: "时间",
    prop: "date",
    width: "",
  },
  {
    label: "姓名",
    prop: "name",
    width: "",
  },
  {
    label: "地址",
    prop: "address",
    width: "",
  },
  {
    label: "状态",
    prop: "state",
    type: "tag",
    width: "",
  },
];

const state = reactive({
  tableData: [
    {
      date: "2016-05-03",
      name: "HOSEA",
      address: "湖南长沙",
      state: 0,
    },
    {
      date: "2016-05-03",
      name: "HOSEA",
      address: "湖南长沙",
      state: 0,
    },
    {
      date: "2016-05-03",
      name: "HOSEA",
      address: "湖南长沙",
      state: 0,
    },
    {
      date: "2016-05-03",
      name: "HOSEA",
      address: "湖南长沙",
      state: 0,
    },
  ],
});

const handleEdit = (index, row) => {
  console.log(index, row);
};

const handleDelete = (index, row) => {
  console.log(index, row);
};
</script>

<template>
  <el-table
    :data="state.tableData"
    :header-cell-style="HeaderCellStyle"
    size="mini"
    fit
    stripe
    style="width: 100%"
  >
    <!-- 动态渲染 -->
    <el-table-column
      v-for="item in TableColumn"
      :prop="item.prop"
      :label="item.label"
      :key="item.prop"
      :width="item.width"
      align="center"
    >
      <template #default="scope">
        <!-- <el-icon><timer /></el-icon> -->

        <span v-if="!item.type">{{ scope.row[item.prop] }}</span>

        <span v-else-if="item.type === 'tag'">
          <el-tag
            v-if="scope.row[item.prop] == 1"
            class="m-tag"
            size="medium"
            color="#a20088"
          >
            {{ "正常" }}
          </el-tag>
          <el-tag
            v-if="scope.row[item.prop] == 0"
            class="m-tag"
            size="medium"
            color="#a20088"
          >
            {{ "异常" }}
          </el-tag>
        </span>
      </template>
    </el-table-column>

    <!-- 操作 -->
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            :icon="Edit"
            @click="handleEdit(scope.$index, scope.row)"
          >
          </el-button>
          <el-button
            type="danger"
            size="mini"
            :icon="Delete"
            @click="handleDelete(scope.$index, scope.row)"
          >
          </el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped lang="scss"></style>
