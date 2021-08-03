import {Line} from 'react-chartjs-2'
import {style} from './Balance.module.css'
export function  LineBalance () {
    const state = {
        labels:[ "Enero" , "Febrero", "Marzo", "Abril", "Mayo", "Junio",
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
          datasets: [
            {
              label: "Gastos",
              data: [12, 9, 3, 5, 2, 3, 6 , 7, 6.50, 9, 11, 9 ],
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
        <div className={styleMedia.line}>
        <Line 
            data={state}
            options={options}
        />
    </div>
    )
}

export default LineBalance;