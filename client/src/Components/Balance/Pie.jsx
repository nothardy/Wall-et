import {Pie} from 'react-chartjs-2'
import style from './Balance.module.css'
export function  PieBalance () {
    const state = {
        labels:[ "Lunes" , "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
          datasets: [
            {
              label: "Balance",
              data: [12, 9, 3, 5, 2, 4, 6],
              backgroundColor : ["#D62793", '#F7612C', '#ADD9CE','#069289','#8fa800', 
              '#8473FF', '#DB485C' ]
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
        <Pie 
            data={state}
            /* options={options} */
        />
    </div>
    )
}

export default PieBalance;