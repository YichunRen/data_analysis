

let product = ['191499', '353560', '1059899', '713695', '1039919',
				'221663', '655904', '81360', '936203', '107407'];
let blueColor = ["#D9ED92", "#B5E48C", "#99D98C", "#76C893", "#52B69A",
				"#34A0A4", "#168AAD", "#1A759F", "#1E6091", "#184E77"];


function plotBar() {
	Highcharts.chart('seriesSales', {
		chart: {
			type: 'bar'
		},
		title: {
			text: '产品当日销量'
		},
		xAxis: {
			categories: product,
			title: {
				text: '产品id'
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: '销量'
			}
		},
		tooltip: {
			showAll: true,
			shared: true,
			positioner: function(labelWidth, labelHeight, point) {
				var tooltipX = point.plotX + 20;
				var tooltipY = point.plotY;
				return {x: tooltipX, y: tooltipY};
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			},
			series: {
                pointWidth: 25
            }
		},
		credits: {
			enabled: false
		},
		series: [{
			name: '销量',
			data: [
				{y: 2332, color: blueColor[0], value: 0},
				{y: 2018, color: blueColor[1], value: 1},
				{y: 1851, color: blueColor[2], value: 2},
				{y: 1659, color: blueColor[3], value: 3},
				{y: 1467, color: blueColor[4], value: 4},
				{y: 1444, color: blueColor[5], value: 5},
				{y: 1325, color: blueColor[6], value: 6},
				{y: 1254, color: blueColor[7], value: 7},
				{y: 1202, color: blueColor[8], value: 8},
				{y: 1200, color: blueColor[9], value: 9}],
			showInLegend: false,
		}]
	});
}

function plotStock() {
	Highcharts.stockChart('stockChart', {
		title: {
			text: '5月-11月用户各行为数量'
		},
	
		plotOptions: {
			series: {
				dataGrouping: {
					smoothed: true,
				}
			}
		},
										
		xAxis: {	
			startOnTick: false,
			endOnTick: false,
			showLastLabel: true,
			title: {
				text: '月'
			},
			tyep: 'datetime',
		},
	
		yAxis: {
			title: {
				text: '数量'
			},
			min: 0,
			opposite: false
		},
	
		legend: {
			enabled: true,
			align: 'right',
			layout: 'vertical',
			verticalAlign: 'top',
			y: 100
		},	

		navigator: {
			enabled: false
		},

		rangeSelector: {
			enabled: false
		},

		scrollbar: {
            enabled: false
		},	
		
		credits: {
			enabled: false
		},

		series: [{
			showLastLabel: true,
			cropThreshold: 1,
			name:'点击',
			color: pieColor2[1],
			data : [
				{x: Date.UTC(2021,4,1), y: 2299526},
				{x: Date.UTC(2021,5,1), y: 5715897},
				{x: Date.UTC(2021,6,1), y: 4334576},
				{x: Date.UTC(2021,7,1), y: 4581209},
				{x: Date.UTC(2021,8,1), y: 5657308},
				{x: Date.UTC(2021,9,1), y: 7624845},
				{x: Date.UTC(2021,10,1), y: 18337352},
				
			]
		},
		{
			showLastLabel: true,
			cropThreshold: 1,
			name:'加入购物车',
			color: pieColor2[2],
			data : [
				{x: Date.UTC(2021,4,1), y: 1750},
				{x: Date.UTC(2021,5,1), y: 2725},
				{x: Date.UTC(2021,6,1), y: 2397},
				{x: Date.UTC(2021,7,1), y: 3036},
				{x: Date.UTC(2021,8,1), y: 4923},
				{x: Date.UTC(2021,9,1), y: 11120},
				{x: Date.UTC(2021,10,1), y: 50799},
			]
		},
		{
			showLastLabel: true,
			cropThreshold: 1,
			name:'购买',
			id: '购买',
			color: pieColor2[4],
			data : [
				{x: Date.UTC(2021,4,1), y: 239479},
				{x: Date.UTC(2021,5,1), y: 315585},
				{x: Date.UTC(2021,6,1), y: 282827},
				{x: Date.UTC(2021,7,1), y: 289721},
				{x: Date.UTC(2021,8,1), y: 368047},
				{x: Date.UTC(2021,9,1), y: 442844},
				{x: Date.UTC(2021,10,1), y: 1353641},
			]
		},
		{
			showLastLabel: true,
			cropThreshold: 1,
			name:'关注商品',
			color: pieColor2[3],
			data : [
				{x: Date.UTC(2021,4,1), y: 224911},
				{x: Date.UTC(2021,5,1), y: 322532},
				{x: Date.UTC(2021,6,1), y: 264918},
				{x: Date.UTC(2021,7,1), y: 306221},
				{x: Date.UTC(2021,8,1), y: 406901},
				{x: Date.UTC(2021,9,1), y: 619938},
				{x: Date.UTC(2021,10,1), y: 860302},
			]
		}
	]
	});
}



var pieColor = ['#E63946', '#457B9D','#F1FAEE'];
var pieColor2 = [ '#F1FAEE', '#A8DADC', '#457B9D', '#1D3557', '#E63946'];
function plotPie() {
	Highcharts.chart('pieBuy', {
		credits: {
			enabled: false
		},
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		title: {
			text: '购买用户性别分布',
			align: 'center',
			verticalAlign: 'middle',
			y: 60
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%',
				pie: {
                    shadow: false
				},
				colors: pieColor
			}
		},
		legend: {
			symbolPadding: 0,
			symbolWidth: 50
		},
		series: [{
			type: 'pie',
			name: '比例',
			innerSize: '50%',
			showInLegend:true,
			data: [
				['女性', 246682],
				['男性', 246394],
				['未知', 246767]
			],
			dataLabels: {
				style: {
					color: 'black',
					fontSize: '11px',
					textOutline: false
				}
			}
		}]
	});


	Highcharts.chart('pieAge', {
		credits: {
			enabled: false
		},
		chart: {
			plotBackgroundColor: null,
			plotBorderWidth: 0,
			plotShadow: false
		},
		title: {
			text: '购买用户年龄分布',
			align: 'center',
			verticalAlign: 'middle',
			y: 60
		},
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		accessibility: {
			point: {
				valueSuffix: '%'
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					distance: -50,
					style: {
						fontWeight: 'bold',
						color: 'white'
					}
				},
				startAngle: -90,
				endAngle: 90,
				center: ['50%', '75%'],
				size: '110%',
				pie: {
                    shadow: false
				},
				colors: pieColor2
			}
		},
		legend: {
			symbolPadding: 0,
			symbolWidth: 50
		},
		series: [{
			type: 'pie',
			name: '比例',
			innerSize: '50%',
			showInLegend:true,
			data: [
				['<18', 121740],
				['18-24', 122072],
				['25-29', 122009],
				['30-34', 122173],
				['35-39', 121668],
				['40-49', 122389],
				['>50', 121905],
				['未知', 121709]
			],
			dataLabels: {
				style: {
					color: 'black',
					fontSize: '11px',
					textOutline: false
				}
			}
		}]
	});
	
}



function init() { 
	plotBar();
	plotStock();
	plotPie();
}