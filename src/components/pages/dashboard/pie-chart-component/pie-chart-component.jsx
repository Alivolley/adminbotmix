import CanvasJSReact from '@canvasjs/react-charts';
import { PieChartComponentStyle } from './pie-chart-component.style';

const { CanvasJSChart } = CanvasJSReact;

function PieChartComponent() {
   const options = {
      animationEnabled: true,
      width: 250,
      height: 300,
      backgroundColor: 'transparent',

      data: [
         {
            type: 'pie',
            toolTipContent: '{y}% :<b>{label}</b> ',
            indexLabelFontSize: 12,
            indexLabel: '{y}%',
            indexLabelPlacement: 'inside',
            indexLabelFontColor: '#ffffff',
            indexLabelFontFamily: 'vazir',
            indexLabelDirection: 'ltr',
            dataPoints: [
               { y: 75, label: 'کاربر', color: '#3d92c9' },
               { y: 25, label: 'باتمیکس', color: '#7f9dc3' },
            ],
         },
      ],
   };

   return (
      <PieChartComponentStyle className="customLg:ml-8 customXl:ml-12">
         <CanvasJSChart options={options} />
      </PieChartComponentStyle>
   );
}

export default PieChartComponent;
