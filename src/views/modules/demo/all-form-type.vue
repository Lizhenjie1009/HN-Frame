<template>
  <div class="smp-all-form-type normalWraper">
    <smpCard
      cardname="表单内容合集"
    >
    <div class="smp-aft-inner">
      <el-form class="smp-form" ref="form" :rules="rules" :model="form" label-width="120px">
        <el-form-item label="输入框" prop="input">
          <el-input v-model="form.input" placeholder="请输入关键字"></el-input>
        </el-form-item>
        <el-form-item label="下拉框" prop="select">
          <el-select v-model="form.select" placeholder="请选择预案类型">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="单选" prop="radio">
          <el-radio-group v-model="form.radio">
            <el-radio label="A选项"></el-radio>
            <el-radio label="B选项"></el-radio>
            <el-radio label="C选项"></el-radio>
            <el-radio label="D选项"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="多选" prop="checkbox">
          <el-checkbox-group v-model="form.checkbox">
            <el-checkbox label="A选项"></el-checkbox>
            <el-checkbox label="B选项"></el-checkbox>
            <el-checkbox label="C选项"></el-checkbox>
            <el-checkbox label="D选项"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="时间" prop="time">
          <el-col :span="24">
            <el-time-picker placeholder="请选择时间" v-model="form.time"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="日期时间" prop="timeDate">
          <el-col :span="24">
            <el-date-picker type="datetime" placeholder="请选择日期时间" v-model="form.timeDate"></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="日期区间" required>
          <el-col :span="11">
            <el-form-item prop="dayStart">
              <el-date-picker type="date" placeholder="请选择开始日期" v-model="form.dayStart"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col class="smp-aft-line" :span="2">—</el-col>
          <el-col :span="11">
            <el-form-item prop="dayEnd">
              <el-date-picker placeholder="请选择结束日期" v-model="form.dayEnd"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="区间范围选择">
          <el-slider v-model="form.slider"></el-slider>
        </el-form-item>
        <el-form-item label="开关">
          <el-switch v-model="form.switch"></el-switch>
        </el-form-item>
        <el-form-item label="文本域" prop="textarea">
          <el-input type="textarea" v-model="form.textarea"></el-input>
        </el-form-item>
        <el-form-item label="标签">
          <div class="smp-fi-flexwraper">
            <smp-tags lv="1" name="AAAAAA"></smp-tags>
            <smp-tags lv="2" name="AAAAAA"></smp-tags>
            <smp-tags lv="3" name="AAAAAA"></smp-tags>
            <smp-tags lv="4" name="AAAAAA"></smp-tags>
          </div>
        </el-form-item>
        <el-form-item>
          <div class="smpaft-btn-wraper">
            <div class="smpaft-btn smp-btn-full" @click="onSubmit">提交</div>
            <div class="smpaft-btn smp-btn-hollow">取消</div>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </smpCard>

  </div>
</template>

<script>
import smpCard from '@/components/smp-card'
import smpTags from '@/components/smp-tags'
export default {
  data () {
    return {
      form: {
        input: '',
        select: '',
        radio: '',
        checkbox: [],
        slider: 0,
        time: '',
        timeDate: '',
        dayStart: '',
        dayEnd: '',
        switch: false,
        textarea: ''
      },
      rules: {
        input: [
          { required: true, message: '请输入关键字', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        select: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        radio: [
          { required: true, message: '请选择', trigger: 'change' }
        ],
        checkbox: [
          { type: 'array', required: true, message: '请至少选择一个', trigger: 'change' }
        ],
        time: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        dayStart: [
          { type: 'date', required: true, message: '请选择开始日期', trigger: 'change' }
        ],
        dayEnd: [
          { type: 'date', required: true, message: '请选择结束日期', trigger: 'change' }
        ],
        textarea: [
          { required: true, message: '请填写内容', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    smpCard,
    smpTags
  },
  methods: {
    onSubmit () {
      this.$refs['form'].validate((valid) => {})
      console.log('submit!')
    }
  }
}
</script>
