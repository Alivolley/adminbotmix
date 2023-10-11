import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

import HCExporting from 'highcharts/modules/exporting';
import HCExportData from 'highcharts/modules/export-data';

HCExporting(Highcharts);
HCExportData(Highcharts);

// import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
//    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//    const x = cx + radius * Math.cos(-midAngle * RADIAN);
//    const y = cy + radius * Math.sin(-midAngle * RADIAN);

//    return (
//       <text x={x} y={y} fill="white" textAnchor={x > cx ? 'end' : 'start'} dominantBaseline="central" fontSize={12}>
//          {`${(percent * 100).toFixed(0)}%`}
//       </text>
//    );
// };

function PieChartComponent() {
   useEffect(() => {
      const colors = Highcharts.getOptions().colors.map((c, i) =>
         Highcharts.color(Highcharts.getOptions().colors[0])
            .brighten((i - 3) / 7)
            .get()
      );

      const options = {
         chart: {
            backgroundColor: 'transparent',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            style: {
               fontFamily: 'vazir',
               height: '300px',
               fontSize: '18px',
            },
         },
         title: {
            text: '',
         },

         tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
         },

         plotOptions: {
            pie: {
               allowPointSelect: true,
               cursor: 'pointer',
               colors,
               borderRadius: 5,
               dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                  distance: -50,
                  filter: {
                     property: 'percentage',
                     operator: '>',
                     value: 4,
                  },
               },
            },
         },

         exporting: {
            enabled: false,
         },

         credits: {
            enabled: false,
         },

         series: [
            {
               name: 'Share',
               data: [
                  { name: 'کاربر', y: 75, color: '#3D92C9' },
                  { name: 'باتمیکس', y: 25, color: '#7F9DC3' },
               ],
            },
         ],
      };

      Highcharts.chart('container', options);
   }, []);

   return <div id="container" />;
}

export default PieChartComponent;
