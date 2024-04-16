import { BarChart, Bar, Cell, XAxis, YAxis } from "recharts";
import PropTypes from "prop-types";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

const data = [
    {
        name: "Active Listings",
        quantity: 124,
    },
    {
        name: "Listings Views",
        quantity: 1056,
    },
    {
        name: "Your Reviews",
        quantity: 357,
    },
    {
        name: "Times Bookmarked",
        quantity: 2329,
    },
];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
        x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
        x + width
    }, ${y + height}
    Z`;
};

const TriangleBar = ({ fill, x, y, width, height }) => {
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

function Statistics() {
    return (
        <>
            <div>
                <div
                    className={`hidden lg:flex items-center container mx-auto justify-center bg-[#13131308] mt-12 rounded-2xl p-10`}
                >
                    <BarChart
                        width={1500}
                        height={500}
                        data={data}
                        margin={{
                            top: 15,
                            right: 30,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar
                            dataKey="quantity"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: "top" }}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={colors[index % 20]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div
                    className={`hidden sm:flex lg:hidden items-center container mx-auto justify-center bg-[#13131308] mt-3 rounded-2xl`}
                >
                    <BarChart
                        width={800}
                        height={350}
                        data={data}
                        margin={{
                            top: 15,
                            right: 30,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar
                            dataKey="quantity"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: "top" }}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={colors[index % 20]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </div>

                <div
                    className={`flex sm:hidden lg:hidden items-center container mx-auto justify-center bg-[#13131308] mt-3 rounded-2xl`}
                >
                    <BarChart
                        width={500}
                        height={350}
                        data={data}
                        margin={{
                            top: 15,
                            right: 30,
                            left: 0,
                            bottom: 10,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Bar
                            dataKey="quantity"
                            fill="#8884d8"
                            shape={<TriangleBar />}
                            label={{ position: "top" }}
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={colors[index % 20]}
                                />
                            ))}
                        </Bar>
                    </BarChart>
                </div>
            </div>
        </>
    );
}

TriangleBar.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    width: PropTypes.number,
    height: PropTypes.number,
    fill: PropTypes.string,
};

export default Statistics;
