import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const salesData = [
    { name: "07", sales: 4200 },
    { name: "08", sales: 3800 },
    { name: "09", sales: 5100 },
    { name: "10", sales: 4600},
    { name: "11", sales: 5400},
    { name: "12", sales: 7200},
    { name: "01", sales: 6100},
    { name: "02", sales: 6900},
    { name: "03", sales: 6800},
    { name: "04", sales: 6300},
    { name: "05", sales: 7100},
    { name: "06", sales: 7500},
];

const SalesOverviewChart = () => {
    return (
        <motion.div
            className='bg-purple-400 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            <h2 className='text-lg font-medium mb-4 text-gray-100'>Sales Overview</h2>

            <div className='h-80'>
                <ResponsiveContainer width={"100%"} height={"100%"}>
                    <LineChart data={salesData}>
                        <CartesianGrid strokeDasharray='20 5' stroke='white' />
                        <XAxis dataKey={"name"} stroke='yellow' />
                        <YAxis stroke='red' />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(31, 41, 55, 0.8)",
                                borderColor: "#4B5563",
                            }}
                            itemStyle={{ color: "#E5E7EB"}}
                        />
                        <Line
                            type='monotone'
                            dataKey='sales'
                            stroke='#6366f1'
                            strokeWidth={3}
                            dot={{ fill: "#6366f1", strokeWidth: 2, r: 6 }}
                            activeDot={{ r: 8, strokeWidth: 2 }}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>

        </motion.div>
    )
};

export default SalesOverviewChart;