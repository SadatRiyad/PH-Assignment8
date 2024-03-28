/* eslint-disable react/prop-types */
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import useLocalStorage from '../../Hooks/useLocalStorage';
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const getPath = (x, y, width, height) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`;
};

const TriangleBar = (props) => {
  const { fill, x, y, width, height } = props;

  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

export default function PagesToRead() {
    const { localData } = useLocalStorage();
    const data = localData;


  return (
    <ResponsiveContainer width={'99%'} height={300}  className='my-16'>
        <BarChart
        width={1000}
        height={300}
      data={localData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <Tooltip />
      <YAxis tickFormatter={(value) => `${value} pages`} />
      <YAxis />
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
    </ResponsiveContainer>
    
  );
}





// PagesToRead

// function CustomTooltip({ payload, label, active }) {
//     if (active) {
//       return (
//         <div className="custom-tooltip">
//           <p className="label">{`${label} : ${payload[0].value}`}</p>
//           <p className="intro">{getIntroOfPage(label)}</p>
//           <p className="desc">Anything you want can be displayed here.</p>
//         </div>
//       );
//     }
  
//     return null;
//   }
//   const renderBarChart = (
//     <BarChart width={600} height={300} data={data}>
//       <XAxis dataKey="name" tick={renderCustomAxisTick} />
//       <YAxis />
//       <Tooltip content={<CustomTooltip />}/>
//       <Bar dataKey="uv" fill="#8884d8"
//         shape={<TriangleBar />} />
//     </BarChart>
//   );