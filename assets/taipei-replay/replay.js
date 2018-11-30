
MG._hooks = {};

d3.json('/assets/taipei-replay/taipei_votes_by_time.json', function(data) {
  console.log(data.length)
  for (var i = 0; i < data.length; i++) {
  data[i] = MG.convert.date(data[i], 'date', '%Y%m%d-%H%M%S');
  }
  function getTimeZone() {
      var offset = new Date().getTimezoneOffset(), o = Math.abs(offset);
      return (offset < 0 ? "+" : "-") + ("00" + Math.floor(o / 60)).slice(-2) + ":" + ("00" + (o % 60)).slice(-2);
  }
  var markers1 = [{
        // 'date': '2018-11-24T20:25:00.000',
        'date': new Date('2018-11-24T20:25:00.000'+getTimeZone()),
        'label': '姚文智承認敗選'
    }, {
        'date': new Date('2018-11-25T02:00:00.000'+getTimeZone()),
        'label': '丁守中提選舉無效'
    }];

  var markers2 = [{
        // 'date': '2018-11-24T20:25:00.000',
        'date': new Date('2018-11-24T21:36:30.000'+getTimeZone()),
        'label': '南港'
    }, {
        'date': new Date('2018-11-24T22:27:05.000'+getTimeZone()),
        'label': '萬華'
    }, {
        'date': new Date('2018-11-24T22:36:45.000'+getTimeZone()),
        'label': '大同'
    }, {
        'date': new Date('2018-11-24T23:57:23.000'+getTimeZone()),
        'label': '中山'
    }, {
        'date': new Date('2018-11-25T00:39:50.000'+getTimeZone()),
        'label': '中正'
    }, {
        'date': new Date('2018-11-25T00:46:12.000'+getTimeZone()),
        'label': '信義'
    }, {
        'date': new Date('2018-11-25T00:57:21.000'+getTimeZone()),
        'label': '內湖'
    }, {
        'date': new Date('2018-11-25T01:33:40.000'+getTimeZone()),
        'label': '北投'
    }, {
        'date': new Date('2018-11-25T01:48:48.000'+getTimeZone()),
        'label': '文山'
    }, {
        'date': new Date('2018-11-25T02:05:58.000'+getTimeZone()),
        'label': '松山'
    }, {
        'date': new Date('2018-11-25T02:17:51.000'+getTimeZone()),
        'label': '士林'
    }, {
        'date': new Date('2018-11-25T02:39:01.000'+getTimeZone()),
        'label': '大安'
    }];


  MG.data_graphic({
  title: "已開票數",
  rollover_time_format: "%H:%M:%S",
  linked: true,
  linked_format: '%Y-%m-%d-%H-%M-%S',
  interpolate: d3.curveMonotoneX,
  data: data,
  markers: markers2,
  width: 800,
  height: 200,
  right: 200,
  x_sort: false,
  x_accessor: 'date',
  y_accessor: 'votes',
  brush: 'xy',
  aggregate_rollover: true,
  legend: ['吳蕚洋', '丁守中', '姚文智', '柯文哲', '李錫錕'],
  legend_target: '#legend',
  colors: ['#111', '#96f2ff', '#5ac641', '#abab', '#555'],
  target: '#taipei_votes',
  x_label: '台灣時間',
  y_label: '票數'
  // baselines: [{value: 41.05, label: '柯文哲      '}, {value: 40.82, label: '      丁守中'}]
  });

  MG.data_graphic({
  title: "增加率",
  rollover_time_format: "%H:%M:%S",
  linked: true,
  linked_format: '%Y-%m-%d-%H-%M-%S',
  interpolate: d3.curveMonotoneX,
  data: data,
  width: 800,
  height: 200,
  right: 200,
  x_sort: false,
  min_y: 0,
  max_y: 0.2,
  point_size: 3,
  active_point_on_lines: true,
  active_point_accessor: 'active',
  active_point_size: 2,
  // show_tooltips: false,
  // markers: markers,
  x_accessor: 'date',
  y_accessor: 'incre',
  brush: 'xy',
  aggregate_rollover: true,
  legend: ['吳蕚洋', '丁守中', '姚文智', '柯文哲', '李錫錕'],
  legend_target: '#legend',
  colors: ['#111', '#96f2ff', '#5ac641', '#abab', '#555'],
  target: '#taipei_incre',
  format: 'percentage',
  x_label: '台灣時間',
  y_label: '增加率（％）'

  // baselines: [{value: 41.05, label: '柯文哲      '}, {value: 40.82, label: '      丁守中'}]
  });
});
