/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HCExporting from 'highcharts/modules/exporting';
import HCExportData from 'highcharts/modules/export-data';

HCExporting(Highcharts);
HCExportData(Highcharts);

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
