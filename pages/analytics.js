import { useState } from 'react';
import { Line } from 'react-chartjs-2'
import { useEffect } from 'react';

export default function Analytics() {
    const [selectedTab, setSelectedTab] = useState('Total Traffic');

    const data = {
        labels: ['4/22', '4/23', '4/24', '4/25', '4/26', '4/27'],
        datasets: [
          {
            label: 'Total visits',
            data: [Math.random() * (2500 - 650) + 650, Math.random() * (2500 - 650) + 650, Math.random() * (2500 - 650) + 650, Math.random() * (2500 - 650) + 650, Math.random() * (2500 - 650) + 650, Math.random() * (2500 - 650) + 650],
            fill: false,
            backgroundColor: 'rgb(0, 184, 66)',
            borderColor: 'rgba(0, 184, 66, 0.2)',
            borderWidth: 3
          },
        ],
      };
      
    const options = {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

    useEffect(() => {
      window.onunload = () => {
        fetch('/api/logBounce');
      }
    }, [])

    return(
        <>
        <div style={{minHeight: '20vh'}} className="flex justify-center items-center bg-white border-b">
            <h1 className="text-5xl text-center">Site Analytics</h1>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

        <main className="flex flex-col items-center bg-gray-100 pb-20">
            <div style={{width: '1100px', height: '800px'}} className="mt-20 border rounded bg-white shadow">
                <div className="flex border-b">
                    <div
                        onClick={e => setSelectedTab('Total Traffic')} 
                        className={"flex items-center justify-center py-7 px-12 text-2xl border-r w-4/12 cursor-pointer " + (selectedTab == 'Total Traffic' ? 'bg-green-50' : 'hover:bg-gray-50')}>
                        Total Traffic
                    </div>
                    <div
                        onClick={e => setSelectedTab('Users')} 
                        className={"flex items-center justify-center py-7 px-12 text-2xl border-r w-4/12 cursor-pointer " + (selectedTab == 'Users' ? 'bg-green-50' : 'hover:bg-gray-50')}>
                        Users
                    </div>
                    <div
                        onClick={e => setSelectedTab('Locations')} 
                        className={"flex items-center justify-center py-7 px-12 text-2xl border-r w-4/12 cursor-pointer " + (selectedTab == 'Locations' ? 'bg-green-50' : 'hover:bg-gray-50')}>
                        Locations
                    </div>
                    <div
                        onClick={e => setSelectedTab('App Success')} 
                        className={"flex items-center justify-center py-7 px-12 text-2xl border-r w-4/12 cursor-pointer " + (selectedTab == 'App Success' ? 'bg-green-50' : 'hover:bg-gray-50')}>
                        App Success
                    </div>
                </div>

                <div className="m-20">
                    <Line data={data} options={options} />
                </div>
            </div>
        </main>
        </>
    )
}