import * as d3 from "d3";
import './css/showTotal.less'

export default {
  data() {
    return {
      name: 'ShowTotal'
    }
  },
  methods: {
    $_handleInput(e) {
      console.log('e',e.target.value)
      this.name = e.target.value
    },
    first() {
      let p1 = d3.select("body").select("#p1").text("hello");
      p1.style("color", "#f03")
        .style("font-size", "30px");
      let p2 = d3.select("body").select("#p2").text("hello");
      p2.style("color", "#0f5")
        .style("font-size", "40px");
      let p3 = d3.select("body").select("#p3").text("hello");
      p3.style("color", "#03e")
        .style("font-size", "50px");
      console.log('选择集合是否为空',p1.empty())
      console.log('选择集合是否非空元素',p2.node())
      console.log('选择集合元素个数',p3.size())
      p1.attr('class','p1')
      p2.classed('p1',true).classed('p2',false)
      p2.style({"padding":"20px","display":"block"})
      console.log('input value',d3.select('input').property('value'))
    },
  },
  mounted(){
    this.first()
  },
  render() {
    return (
      <div>
        <input value={this.name} onInput={this.$_handleInput}></input>
        <p id="p1">1111</p>
        <p id="p2">2222</p>
        <p id="p3">3333</p>
      </div>
    )
  }
}