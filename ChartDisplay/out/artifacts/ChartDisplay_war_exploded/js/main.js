var xmlHttpRequest;
//创建XMLHTTPRequest对象
function createXMLRequest() {
    if (window.XMLHttpRequest) {
        xmlHttpRequest = new XMLHttpRequest();
    } else {
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
}

function createColumnChart(){
    $.ajax({
        type: 'post',//HTTP请求类型
        url: "creatColumnChart.do",
        data: {},
        dataType: "json",
        success: function (response) {
            var xDate = [];
            var yDate = [];
            for(var i=0;i<response.length;i++){
                xDate.push(response[i].goodsName);
                yDate.push(response[i].salesAmount);
            }
            // 图表配置
            var options = {
                chart: {
                    type: 'column',
                    inverted: true,  //调换xy轴
                    colorByPoint: true,
					animation: false
                },
                title: {
                    text: '按商品销售统计',                 // 标题
                    style:{
                        color: '#ff0000',
                        fontSize: "28px",
                        fontWeight: "blod"
                    }
                },
                xAxis: {
                    categories: xDate,// x 轴分类
					labels:{
						style:{
							fontSize: "15px"
						}
					}
				},
                yAxis: {
                    title: {
                        text: '销售金额（万元）'// y 轴标题
                    },
					style:{
						fontSize:"16px"
					}
                },
                plotOptions: {
                    column: {
                        colorByPoint:true
                    }
                },
                credits:{
                    text: 'www.PZisGuard.com',
                    href: 'http://localhost:8080/ChartDisplay/',
					style:{
						fontSize:"20px",
						color:"blue"
					}
                },
                series: [{
                    name: '',
                    data: yDate
                }]
            }
            Highcharts.chart('container1', options);
        }
    });
}


function createLineChart(){
	$.ajax({
	    type: 'post',//HTTP请求类型
	    url: "createLineChart.do",
	    data: {},
	    dataType: "json",
	    success: function (response) {
			//图表配置
			var options = {
				chart: {
					type: 'line'
				},
                title: {
                    text: '不同城市的月平均气温',
                    x: -20,
                    style: {
                        color: '#5555ff',
                        fontSize: "30px",
                        fontWeight: "blod"
                    }
                },
                subtitle: {
                    text: '数据来源: WorldClimate.com',
                    x: -20,
                    style: {
                        color: '#000000',
                        fontSize: "24px"
                    }
                },

                xAxis: {
                    categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
                    crosshair: {
                        width: 3,
                        color: 'green'
                    },
                    labels: {
                        rotation: -30 //倾斜的角度
                    }
                },
                yAxis: {
                    title: {
                        text: '温度 (°C)',
                        style: {
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
                credits:{
                    enabled: false // 禁用版权信息
                },
                //数据列
                series: []
            }
			for(var i=0;i<response.length;i++){
				var data = {"name": response[i].cityName,"data": response[i].temperArray};
				options.series.push(data);
			}
            Highcharts.chart('container2',options);
		}
	});
}

function createPieChart(){
	$.ajax({
	    type: 'post',//HTTP请求类型
	    url: "createPieChart.do",
	    data: {},
	    dataType: "json",
	    success: function (response) {
			//图表配置
			var options = {
                chart: {
                    type: 'pie'
                },
                title: {
                    text: '2014某网站各浏览器浏览量占比',
                    style: {
                        fontSize: "30px"
                    }
                },
                tooltip: {
                    headerFormat: '{series.name}<br>',
                    pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>',
                    style: {
                        fontSize: "17px"
                    }
                },
                plotOptions: {
                    pie: {
                        dataLabels: {
                            formatter: function () {
                                return this.point.name + "：" + this.y + "%";
                            },
                            distance: 60,
                            enabled: true,
                            style: {
                                fontWeight: 'bold',
                                fontSize: "23px"
                            }
                        },
					center: ['50%', '35%']
                    }
                },
                series: []
            }
			var dataArray = new Array();
            for(var i=0;i<response.length;i++){
                var data = [response[i].browserName,response[i].percent];
                dataArray.push(data);
            }
            var se = {"name": "浏览量占比","data": dataArray};
            options.series.push(se);
            Highcharts.chart('container3',options);
		}
	});			
}

function createCharts(){ //先初始化表格，即第一次生成
    createColumnChart();
    createLineChart();
    createPieChart();
    //setTimeout('createCharts()',10000); //10秒刷新一次
}


$(document).ready(function () {
    createCharts();
});

