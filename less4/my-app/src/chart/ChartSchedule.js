import React, { Component } from 'react'
import Chart from 'chart.js/auto';

class ChartSchedule extends Component {

    chartEl = React.createRef();

    componentDidMount = () => {

        const ctx = this.chartEl.current.getContext('2d');

        this.chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: '1',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [0, 10, 5, 2, 20, 30, 45]
                    },
                    {
                        label: '2',
                        backgroundColor: 'rgb(155, 79, 92)',
                        borderColor: 'rgb(155, 79, 92)',
                        data: [0, 20, 15, 20, 30, 20, 45]
                    }
                ]
            },
            options: {}
        });
    }

    randomizeData = (length, min, max) => {
        return  Array.from({ length: length}, () => {
               return Math.floor(Math.random() * (max - min + 1) + min);
            }
        );
    }

    changeData = () => {
        this.chart.data.datasets.map(datasets => {
            return datasets.data = this.randomizeData(datasets.data.length, 0, 70);
        })
        this.chart.update();
    }

    render = () => {
        const { chartEl, changeData } = this;

        return (
            <div className='schedule'>
                <h2>Chart random values</h2>
                <canvas ref={chartEl} />
                <button className='buttonRandomize' onClick={changeData} type='button'>Сhange values</button>
            </div>
        );
    }
}

export default ChartSchedule;
