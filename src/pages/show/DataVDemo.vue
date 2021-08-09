<template>
  <div>
    <div class="align-center">
      <!-- <dv-decoration-9 style="width: 150px; height: 150px">66%</dv-decoration-9>
      <dv-decoration-12 style="width: 150px; height: 150px" />
      <dv-charts :option="option" />
      <dv-active-ring-chart
        :config="config1"
        style="width: 300px; height: 300px"
      />
      <dv-capsule-chart :config="config" style="width: 300px; height: 200px" />
      <dv-water-level-pond
        :config="config2"
        style="width: 150px; height: 200px"
      />
      <dv-percent-pond :config="config3" style="width: 200px; height: 100px" /> -->
      <dv-flyline-chart :config="config4" :dev="true" style="width: 100%; height: 100px" />
      <dv-flyline-chart-enhanced
        :config="config5"
        :dev="true"
        style="width: 100%; height: 100px"
      />
      <dv-conical-column-chart
        :config="config6"
        style="width: 400px; height: 200px"
      />
      <dv-digital-flop :config="config7" style="width: 200px; height: 50px" />
      <dv-scroll-board :config="config8" style="width: 500px; height: 220px" />
      <dv-scroll-ranking-board :config="config1" style="width:500px;height:300px" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      config1: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 78,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
        ],
      },
      option: {
        title: {
          text: "剩余油量表",
          style: {
            fill: "#fff",
          },
        },
        series: [
          {
            type: "gauge",
            data: [{ name: "itemA", value: 55 }],
            center: ["50%", "55%"],
            axisLabel: {
              formatter: "{value}%",
              style: {
                fill: "#fff",
              },
            },
            axisTick: {
              style: {
                stroke: "#fff",
              },
            },
            animationCurve: "easeInOutBack",
          },
        ],
      },
      config: {
        data: [
          {
            name: "南阳",
            value: 167,
          },
          {
            name: "周口",
            value: 123,
          },
          {
            name: "漯河",
            value: 98,
          },
          {
            name: "郑州",
            value: 75,
          },
          {
            name: "西峡",
            value: 66,
          },
        ],
        colors: ["#e062ae", "#fb7293", "#e690d1", "#32c5e9", "#96bfff"],
        unit: "单位",
        showValue: true,
      },
      config2: {
        data: [66, 45],
        shape: "roundRect",
      },
      config3: {
        value: 66,
        borderWidth: 5,
        borderRadius: 10,
        borderGap: 5,
        localGradient: true,
      },
      config4: {
        centerPoint: [0.48, 0.35],
        points: [
          {
            position: [0.52, 0.235],
            text: "新乡",
          },
          {
            position: [0.43, 0.29],
            text: "焦作",
          },
          {
            position: [0.59, 0.35],
            text: "开封",
          },
          {
            position: [0.53, 0.47],
            text: "许昌",
          },
          {
            position: [0.45, 0.54],
            text: "平顶山",
          },
          {
            position: [0.36, 0.38],
            text: "洛阳",
          },
          {
            position: [0.62, 0.55],
            text: "周口",
          },
          {
            position: [0.56, 0.56],
            text: "漯河",
          },
          {
            position: [0.37, 0.66],
            text: "南阳",
          },
          {
            position: [0.55, 0.81],
            text: "信阳",
          },
          {
            position: [0.55, 0.67],
            text: "驻马店",
          },
          {
            position: [0.37, 0.29],
            text: "济源",
          },
          {
            position: [0.2, 0.36],
            text: "三门峡",
          },
          {
            position: [0.76, 0.41],
            text: "商丘",
          },
          {
            position: [0.59, 0.18],
            text: "鹤壁",
          },
          {
            position: [0.68, 0.17],
            text: "濮阳",
          },
          {
            position: [0.59, 0.1],
            text: "安阳",
          },
        ],
        bgImgUrl: "/img/flylineChart/map.jpg",
        centerPointImg: {
          url: "/img/flylineChart/mapCenterPoint.png",
        },
        pointsImg: {
          url: "/img/flylineChart/mapPoint.png",
        },
      },
      config5: {
        points: [
          {
            name: "郑州",
            coordinate: [0.48, 0.35],
            icon: {
              src: "/img/flylineChart/mapCenterPoint.png",
              width: 30,
              height: 30,
            },
          },
          {
            name: "新乡",
            coordinate: [0.52, 0.23],
          },
          {
            name: "焦作",
            coordinate: [0.43, 0.29],
          },
          {
            name: "开封",
            coordinate: [0.59, 0.35],
          },
          {
            name: "许昌",
            coordinate: [0.53, 0.47],
          },
          {
            name: "平顶山",
            coordinate: [0.45, 0.54],
          },
          {
            name: "洛阳",
            coordinate: [0.36, 0.38],
          },
          {
            name: "周口",
            coordinate: [0.62, 0.55],
          },
          {
            name: "漯河",
            coordinate: [0.56, 0.56],
          },
          {
            name: "南阳",
            coordinate: [0.37, 0.66],
          },
          {
            name: "信阳",
            coordinate: [0.55, 0.81],
          },
          {
            name: "驻马店",
            coordinate: [0.55, 0.67],
          },
          {
            name: "济源",
            coordinate: [0.37, 0.29],
          },
          {
            name: "三门峡",
            coordinate: [0.2, 0.36],
          },
          {
            name: "商丘",
            coordinate: [0.76, 0.41],
          },
          {
            name: "鹤壁",
            coordinate: [0.59, 0.18],
          },
          {
            name: "濮阳",
            coordinate: [0.68, 0.17],
          },
          {
            name: "安阳",
            coordinate: [0.59, 0.1],
          },
        ],
        lines: [
          {
            source: "新乡",
            target: "郑州",
          },
          {
            source: "焦作",
            target: "郑州",
          },
          {
            source: "开封",
            target: "郑州",
          },
          {
            source: "许昌",
            target: "郑州",
          },
          {
            source: "平顶山",
            target: "郑州",
          },
          {
            source: "洛阳",
            target: "郑州",
          },
          {
            source: "周口",
            target: "郑州",
          },
          {
            source: "漯河",
            target: "郑州",
          },
          {
            source: "南阳",
            target: "郑州",
          },
          {
            source: "信阳",
            target: "郑州",
          },
          {
            source: "驻马店",
            target: "郑州",
          },
          {
            source: "济源",
            target: "郑州",
          },
          {
            source: "三门峡",
            target: "郑州",
          },
          {
            source: "商丘",
            target: "郑州",
          },
          {
            source: "鹤壁",
            target: "郑州",
          },
          {
            source: "濮阳",
            target: "郑州",
          },
          {
            source: "安阳",
            target: "郑州",
          },
        ],
        icon: {
          show: true,
          src: "/img/flylineChart/mapPoint.png",
        },
        text: {
          show: true,
        },
        bgImgSrc: "/img/flylineChart/map.jpg",
      },
      config6: {
        data: [
          {
            name: "周口",
            value: 55,
          },
          {
            name: "南阳",
            value: 120,
          },
          {
            name: "西峡",
            value: 71,
          },
          {
            name: "驻马店",
            value: 66,
          },
          {
            name: "新乡",
            value: 80,
          },
          {
            name: "信阳",
            value: 35,
          },
          {
            name: "漯河",
            value: 15,
          },
        ],
        img: [
          "/img/conicalColumnChart/1st.png",
          "/img/conicalColumnChart/2st.png",
          "/img/conicalColumnChart/3st.png",
          "/img/conicalColumnChart/4st.png",
          "/img/conicalColumnChart/5st.png",
          "/img/conicalColumnChart/6st.png",
          "/img/conicalColumnChart/7st.png",
        ],
        showValue: true,
      },
      config7: {
        config1: {
          number: [100],
          content: "{nt}个",
        },
        config2: {
          number: [600],
          content: "{nt}个",
        },
      },
      config8: {
        header: ["列1", "列2", "列3"],
        data: [
          ["行1列1", "行1列2", "行1列3"],
          ["行2列1", "行2列2", "行2列3"],
          ["行3列1", "行3列2", "行3列3"],
          ["行4列1", "行4列2", "行4列3"],
          ["行5列1", "行5列2", "行5列3"],
          ["行6列1", "行6列2", "行6列3"],
          ["行7列1", "行7列2", "行7列3"],
          ["行8列1", "行8列2", "行8列3"],
          ["行9列1", "行9列2", "行9列3"],
          ["行10列1", "行10列2", "行10列3"],
        ],
        index: true,
        columnWidth: [50],
        align: ["center"],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.align-center {
  height: 100%;
  width: 100%;
  margin: 0 auto;
}
</style>