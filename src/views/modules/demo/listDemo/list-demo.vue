<template>
  <div class="smp-cg-clue-list normalWraper">
    <div class="smpccl-hd">
      <div class="smp-cond-box">
        <div class="smp-cb-item smp-cbi-had">
          <div class="smp-cbi-l">已选条件：</div>
          <div class="smp-cbi-r">
            <div class="cond-choose">
              <div class="cc-hd">
                <div class="cch-input">
                  <div class="cch-input-inner">
                    <span class="cch-ii-item" v-for="(item,i) in condChooseArr" :key="i">【{{item.name}}】</span>
                  </div>
                </div>
                <div class="cch-switch" @click="openCond">
                  <i class="el-submenu__icon-arrow el-icon-arrow-down" :class="{on:isCondOepn}"></i>
                </div>
              </div>
              <div class="cc-bd" :class="{on:isCondOepn}">
                <div class="cc-type-item">
                  <div class="ccti-l">线索类型：</div>
                  <div class="ccti-r">
                    <div class="ccti-text" :class="{on:item.on}" v-for="(item,i) in xiansuoArr" :key="i" @click="addCond(item)">{{item.name}}</div>
                  </div>
                </div>
                <div class="cc-type-item">
                  <div class="ccti-l">敏感性：</div>
                  <div class="ccti-r">
                    <div class="ccti-text" :class="{on:item.on}" v-for="(item,i) in minganArr" :key="i" @click="addCond(item)">{{item.name}}</div>
                  </div>
                </div>
                <div class="cc-type-item">
                  <div class="ccti-l">线索来源：</div>
                  <div class="ccti-r">
                    <div class="ccti-text" :class="{on:item.on}" v-for="(item,i) in laiyuanArr" :key="i" @click="addCond(item)">{{item.name}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="smp-cb-item smp-cbi-time">
          <div class="smp-cbi-l">时间区间：</div>
          <div class="smp-cbi-r smp-all-form-type smp-form">
            <el-col :span="11">
              <el-date-picker type="date" placeholder="请选择开始日期" v-model="dayStart"></el-date-picker>
            </el-col>
            <el-col class="smp-aft-line" :span="2">—</el-col>
            <el-col :span="11">
              <el-date-picker placeholder="请选择结束日期" v-model="dayEnd"></el-date-picker>
            </el-col>
          </div>
        </div>
        <div class="smp-cb-item smp-cbi-title">
          <div class="smp-cbi-l">线索标题：</div>
          <div class="smp-cbi-r smp-form">
            <el-input v-model="condTitle" placeholder="请输入关键字"></el-input>
          </div>
        </div>
      </div>
      <div class="smpcclh-btn-wraper">
        <div class="smpcclh-btn smp-btn-full">查询</div>
        <div class="smpcclh-btn smp-btn-hollow">重置</div>
      </div>
    </div>
    <div class="smpccl-bd">
      <div class="smpccl-tab">
        <el-tabs class="smp-tabs" type="card">
          <el-tab-pane label="全部（100）">
            <listTable></listTable>
          </el-tab-pane>
          <el-tab-pane label="待审核（50）">
            待审核（50）
          </el-tab-pane>
          <el-tab-pane label="审核通过（30）">审核通过（30）</el-tab-pane>
          <el-tab-pane label="审核不通过（30）">审核不通过（30）</el-tab-pane>
          <el-tab-pane label="已发布（10）">已发布（10）</el-tab-pane>
        </el-tabs>
      </div>
      <div class="smp-pagination-wraper">
        <div class="smp-pagination-total">共20页</div>
        <el-pagination
          background
          class="smp-pagination"
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import listTable from './list-demo-table'

export default {
  data () {
    return {
      dayStart: '',
      dayEnd: '',
      condTitle: '',
      isCondOepn: false,
      condChooseArr: [],
      xiansuoArr: [
        {
          name: '全部',
          on: false,
          id: '1'
        },
        {
          name: '走私',
          on: false,
          id: '2'
        },
        {
          name: '偷渡',
          on: false,
          id: '3'
        }
      ],
      minganArr: [
        {
          name: '全部',
          on: false,
          id: '4'
        },
        {
          name: '敏感',
          on: false,
          id: '5'
        },
        {
          name: '重要',
          on: false,
          id: '6'
        }
      ],
      laiyuanArr: [
        {
          name: '全部',
          on: false,
          id: '7'
        },
        {
          name: '人工录入',
          on: false,
          id: '8'
        },
        {
          name: '车辆监测预警',
          on: false,
          id: '9'
        }
      ]
    }
  },
  components: {
    listTable
  },
  methods: {
    openCond () {
      this.isCondOepn = !this.isCondOepn
    },
    addCond (item) {
      let chooseIndex = ''
      this.condChooseArr.filter((e, i) => {
        if (e.id === item.id) {
          chooseIndex = i
          return true
        }
      })
      if (chooseIndex !== '') {
        this.condChooseArr.splice(chooseIndex, 1)
        item.on = false
      } else {
        this.condChooseArr.push(item)
        item.on = true
      }
    }
  }
}
</script>

<style lang="scss">
.smp-cg-clue-list{
  // background-color: $smp--color-font-color-6;
}
</style>
