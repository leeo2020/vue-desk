<template>
  <div>
    <div ref="ec" class="ec"></div>
    <div class="mask-box-wrap" v-show="isShow" ref="mask">
      <div class="mask-box">
        <el-button type="primary" @click="click">确定</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'BarDemo',
  data() {
    return {
      isShow: false
    }
  },
  mounted() {
    this.init()
    var chart = echarts.init(this.$refs.ec, 'dark')
    chart.hideLoading();
  },
  methods: {
    click() {
      this.isShow = false
    },
    strWrap(val, max) {
      let temp = ''
      val.split('').map((el, index) => {
        if (index % max === max - 1) {
          temp += el + '\n'
        } else {
          temp += el
        }
      })
      return temp
    },
    init() {
      var chart = echarts.init(this.$refs.ec, 'dark')
      chart.showLoading();
      const options = {
        title: {
          text: 'ECharts'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          type: 'category',
          triggerEvent: true,
          xAxisLabel: {

          }
        },
        yAxis: {},
        dataset: {
          source: [
            ['product', '2015', '2016', '2017'],
            ['Matcha LattehhhhhhHelloxidjsljsslksjslbfs', 43.3, 85.8, 93.7],
            ['Milk Tea', 83.1, 73.4, 55.1],
            ['Cheese Cocoa', 86.4, 65.2, 82.5],
            ['Walnut Brownie', 72.4, 53.9, 39.1]
          ]
        },
        series: [
          { type: 'bar' },
          { type: 'bar' },
          { type: 'bar' }
        ],
        textStyle: {
          color: 'rgba(255, 255, 255, 0.3)'
        },
        color: [
          '#c2f531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83',
          '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'
        ],
        backgroundColor: '#2c343c'
      }
      chart.setOption(options)
      chart.on('click', 'xAxis.category', (val) => {
        console.log('点击时间', val.value)
        this.isShow = true
        this.$refs.mask.click = e => {
          e.preventDefault()
        }
      })
    }
  }
}
</script>

<style lang="less">
.ec {
  float: left;
  width: 100%;
  height: 400px;
}

.mask-box-wrap {
  float: left;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: transparent;
  pointerevents: "none";
}

.mask-box {
  width: 300px;
  height: 300px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  background-color: purple;
}
</style>
