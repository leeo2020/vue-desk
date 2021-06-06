<template>
	<div class="lx-goodlist">
		<h3>商品列表</h3>
		<div class="lx-serach">
			<!-- 搜索行 -->
			<el-row align="middle" type="flex">
				<el-col :span="2">
					<div class="lx-filter-label">名称搜索:</div>
				</el-col>
				<el-col :span="4">
					<el-input
						v-model="filter.text"
						@change="textFilter"
						clearable
						size="mini"
					></el-input>
				</el-col>

				<el-col :span="4">
					<div class="lx-filter-label">品类筛选:</div>
				</el-col>
				<el-col :span="4">
					<CateSelect
						v-model="filter.cate"
						@change="cateFilter"
						ref="cate"
					></CateSelect>
				</el-col>

				<el-col :span="10">
					<el-button type="primary" size="mini" @click="skipToAdd">
						新增商品
					</el-button>
				</el-col>
			</el-row>
			<!-- 日期行 -->
			<el-row align="left">
				<el-col :span="2">
					<div class="qf-filter-label">日期筛选:</div>
				</el-col>
				<el-col :span="4">
					<el-date-picker
						v-model="filter.date"
						type="daterange"
						size="small"
						align="left"
						unlink-panels
						range-separator="至"
						start-placeholder="开始日期"
						end-placeholder="结束日期"
						prefix-icon=""
						:picker-options="pickerOptions"
					>
					</el-date-picker>
				</el-col>
			</el-row>
		</div>
		<div class="lx-table">
			<el-table
				v-loading
				:data="good.list"
				:highlight-current-row="true"
				style="width: 100%"
			>
				<el-table-column prop="data" label="商品" align="center">
					<template slot-scope="scope">
						<div class="lx-row-img-wrap">
							<div class="lx-row-img">
								<img :src="$img.imgBaseUrl + scope.row.img" alt="img" />
								<div v-text="scope.row.name"></div>
							</div>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="desc" label="描述"> </el-table-column>
				<el-table-column prop="price" label="价格"> </el-table-column>
				<el-table-column prop="hot" label="热销">
					<template slot-scope="scope">
						<span v-text="scope.row.hot ? '热销' : '否'"></span>
					</template>
				</el-table-column>
				<el-table-column label="操作" align="center">
					<template slot-scope="scope">
						<el-button size="mini" @click="editGood(scope.row)"
							>编辑
						</el-button>
						<el-button size="mini" type="danger" @click="delGood(scope.row)"
							>删除
						</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
		<hr />
		<!--商品列表显示 -->
		<div class="lx-page">
			<el-pagination
				@size-change="sizeChange"
				@current-change="currentChange"
				:current-page="1"
				:page-sizes="[2, 5, 10, 20, 50, 100]"
				layout="total, sizes, prev, pager, next, jumper"
				:page-size.sync="filter.size"
				hide-on-single-page
				show-summary
				:total="good.total"
			>
			</el-pagination>
		</div>
		<div>
			<el-input v-model="input" placeholder="placeholder">输入</el-input>
		</div>
	</div>
</template>

<script>
import { CateSelect } from '@/components/common/'
import { mapState, mapMutations } from 'vuex'

export default {
	name: 'GoodList',
	components: {
		CateSelect,
	},
	data: function() {
		return {
			good: {
				list: [],
			},
			rightFrom: false,
			rightTo: false,
			filter: {
				text: '',
				cate: '',
				size: 2,
				page: 1,
				hot: true,
				date: '',
			},
			input: '',
			pickerOptions: {
				shortcuts: [
					{
						text: '近一周',
						onClick(picker) {
							const end = new Date()
							const start = new Date()
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
							picker.$emit('pick', [start, end])
						},
					},
					{
						text: '近一月',
						onClick(picker) {
							const end = new Date()
							const start = new Date()
							start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
							picker.$emit('pick', [start, end])
						},
					},
				],
			},
			value1: '',
			value2: '',
		}
	},
	computed: {
		...mapState('good', ['goodQueryList']),
	},
	mounted() {
		this.initTable(true)
	},
	activated() {
		this.filter = this.goodQueryList
		this.filter = JSON.parse(JSON.stringify(this.filter))
	},
	beforeRouteLeave(to, from, next) {
		if (!new RegExp('/good/add/:').test(to.path)) {
			this.mutateGoodQueryList({
				size: this.filter.size,
				page: this.filter.page,
				text: '',
				cate: '',
				hot: true,
				date: '',
			})
		} else {
			console.log(
				'去路正确?',
				new RegExp('/good/add/:').test(to.path),
				'filter',
				this.filter
			)
			this.mutateGoodQueryList(this.filter)
		}
		next()
	},
	// beforeRouteEnter(to, from, next) {
	//   if((new RegExp('/good/add/:')).test(from.path)){
	//     console.log('来路正确',new RegExp('/good/add/:').test(from.path))
	//     this.rightFrom=true
	//   }else{
	//     this.rightFrom=false
	//   }
	//   next()
	//   },
	methods: {
		...mapMutations('good', ['mutateGoodQueryList']),
		// ...mapActions('good',['activeGoodQueryList']),
		sizeChange(val) {
			this.filter.size = val
			this.initTable()
		},
		currentChange(val) {
			this.filter.page = val
			this.initTable(true)
		},
		initTable(flag) {
			if (!flag) {
				this.filter.page = 1
			}
			this.mutateGoodQueryList(this.filter)
			this.$api.fetchGoodList(this.filter).then((res) => {
				this.good = res
			})
		},
		skipToAdd() {
			this.$router.history.push('/good/add/0')
		},
		textFilter(val) {
			this.filter.text = val
			this.initTable()
		},
		delGood(item) {
			console.log('item', item)
			this.$confirm(`你确定要删除 ${item.name} 吗？`, '危险', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				type: 'warning',
			})
				.then(() => {
					// 调接口删除商品
					this.$api.fetchGoodDel({ id: item._id }).then(() => {
						this.initTable(true)
					})
				})
				.catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除',
					})
				})
		},

		editGood(item) {
			this.$router.push('/good/add/:' + item._id)
		},

		cateFilter(val) {
			this.filter.page = 1
			this.filter.cate = val
			this.initTable()
		},
	},
}
</script>

<style lang="less" scoped>
.lx-goodlist {
	height: 100%;
	width: 100%;
	.lx-serach {
		margin: 20px 0;
		.el-row {
			margin: 15px 0;
		}
	}
	.lx-table {
		border-radius: 5px;
		margin: 20px 0;
		box-sizing: border-box;
		overflow: hidden;
		.lx-row-img-wrap {
			padding-left: 70px;
			height: 85px;
			.lx-row-img {
				width: 60px;
				height: 60px;
				img {
					width: 100%;
					height: 100%;
				}
			}
		}
		.el-table__body .el-table__row .current-row {
			color: #fff;
			background-color: hsl(160, 76%, 21%) !important;
		}
	}
	h3 {
		height: 50px;
		text-align: left;
		line-height: 50px;
	}
	.lx-page {
		margin: 20px 0;
	}
}</style
>>
