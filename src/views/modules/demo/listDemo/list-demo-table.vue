<template>
  <el-table
    class="smp-table"
    :data="tableData"
    style="width: 100%;"
  >
    <el-table-column
      type="index"
      label="序号"
      width="50">
    </el-table-column>
    <el-table-column prop="title" label="线索标题" header-align="center" align="center"></el-table-column>
    <el-table-column prop="status" label="线索状态" header-align="center" align="center"></el-table-column>
    <el-table-column prop="type" label="线索类型" header-align="center" align="center"></el-table-column>
    <el-table-column prop="inTime" label="接入时间" header-align="center" align="center"></el-table-column>
    <el-table-column prop="from" label="线索来源" header-align="center" align="center"></el-table-column>
    <el-table-column prop="sValue" label="线索价值" header-align="center" align="center"></el-table-column>
    <el-table-column prop="target" label="涉及对象" header-align="center" align="center"></el-table-column>
    <el-table-column prop="tool" label="工具" header-align="center" align="center"></el-table-column>
    <el-table-column
      :label="$t('handle')"
      fixed="right"
      header-align="center"
      align="center"
      width="150"
    >
      <template slot-scope="scope">
        <el-button
          type="text"
          size="small"
        >上传</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      default () {
        return [
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          },
          {
            title: '测试数据',
            status: '测试数据',
            type: '测试数据',
            inTime: '测试数据',
            from: '测试数据',
            sValue: '测试数据',
            target: '测试数据',
            tool: '测试数据'
          }
        ]
      }
    }
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="scss">
.clue-list-table {
  // padding: 0!important;
}
</style>
