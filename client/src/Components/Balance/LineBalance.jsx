import {Line} from 'react-chartjs-2';
import {style} from './Balance.module.css';


export function  LineBalance (props) {
    const state = {
        labels :[ "Enero" , "Febrero", "Marzo", "Abril", "Mayo", ],
          datasets: [
            {
              label: "Gastos",
              data : [12, 9, 3, 5, 2], //eje y
              backgroundColor : "#D62793"
            },
          ],
    }
    const options = {
        title : {
            text : 'Balance Anual',
            display : true,
            fonSize: 20,            
          },  
        maintainAspectRatio: false,
    }
    return (
        <div className={style.line}>
        <Line 
            data={state}
            options={options}
        />
    </div>
    )
}

export default LineBalance;