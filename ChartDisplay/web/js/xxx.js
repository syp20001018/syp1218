
// 图表配置
var options = {
	chart: {
		type: 'column'                          //指定图表的类型
	},
	title: {
		text: '我的第一个图表',
		style:{
		                            color: '#ff0000',
		                            fontSize: "30px",
		                            fontWeight: "blod"
		                        },
	},
	xAxis: {
		categories: ['苹果', '香蕉', '橙子'],
		style:{
		                            color: '#ff0000',
		                            fontSize: "30px",
		                            fontWeight: "blod"
		                        },// x 轴分类
	},
	yAxis: {
		title: {
			text: '吃水果个数'                // y 轴标题
		}
	},
	credits:{
	     enabled: false // 禁用版权信息
	},
	series: [{                              // 数据列
		name: '小明',                        // 数据列名
		data: [1, 0, 4]                     // 数据
	}, {
		name:'小红',
		data: [5, 7, 3]
	}]
};
// 图表初始化函数
var chart = Highcharts.chart('container1', options);

/**
  * Highcharts 在 4.2.0 开始已经不依赖 jQuery 了，直接用其构造函数既可创建图表
 **/

var chart = new Highcharts.Chart('container2', {
	
	title: {
		text: '不同城市的月平均气温',
		x: -20,	
		style:{
			color: '#5555ff',
		    fontSize: "30px",
			fontWeight: "blod"
		}
	},
	subtitle: {
		text: '数据来源: WorldClimate.com',
		x: -20,
		style:{
			color: '#000000',
		    fontSize: "24px",
		}
	},
	xAxis: {
		categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		crosshair: {
					width: 3,
					color: 'green'
		},
		labels: { 
		             rotation: -30, //倾斜的角度
		}
	},
	yAxis: {
		title: {
			text: '温度 (°C)',
			style:{
			    fontSize: "20px"
			}
		},
		crosshair: {
					width: 3,
					color: 'green'
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#ff0000'
		}]
	},
	tooltip: {
		valueSuffix: '°C'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle',
		borderWidth: 0
	},
	series: [{
		name: '东京',
		data: [7.0,6.9,9.5,14.5,18.2,21.5,25.2,26.5,23.3,18.3,13.9,9.6]
	}, {
		name: '纽约',
		data: [-0.2,0.8,5.7,11.3,17.0,22.0,24.8,24.1,20.1,14.1,8.6,2.5]
	}, {
		name: '柏林',
		data: [-0.9,0.6,3.5,8.4,13.5,17.0,18.6,17.9,14.3,9.0,3.9,1.0]
	}, {
		name: '伦敦',
		data: [3.9,4.2,5.7,8.5,11.9,15.2,17.0,16.6,14.2,10.3,6.6,4.8]
	}]
});

var chart = Highcharts.chart('container3', {
	chart: {
		type: 'pie'
	},
	title: {
		text: '2014某网站各浏览器浏览量占比',
		style:{
		    fontSize: "40px"
		}
	},
	tooltip: {
		headerFormat: '{series.name}<br>',
		pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
		style:{
			fontSize:"20px"
		}
	},
	plotOptions: {
		pie: {
			dataLabels: {
				formatter: function () {
					return  this.point.name + "： " + this.y + "%";
				},
				enabled: true,
				distance: 40,
				style: {
					fontWeight: 'bold',
					color: 'black',
					fontSize: "25px"
				}
			},
			center: ['50%', '35%']
		}
	},
	series: [{
		name:"浏览量占比",
		data: [
			['Firefox',   45.0],
			['IE',       26.8],
			['Chrome', 12.8],
			['Safari',    8.5],
			['Opera',     6.2],
			['其他',    0.7]
		]
	}]
});

