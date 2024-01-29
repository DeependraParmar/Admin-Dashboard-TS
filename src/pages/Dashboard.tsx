import { FaRegBell, FaSearch } from "react-icons/fa"
import AdminSidebar from "../components/AdminSidebar"
import Divider from "../components/Divider"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"
import data from "../assets/data.json";
import { BarChart, DoughnutChart } from "../components/Charts";
import { BiMaleFemale } from "react-icons/bi";

const Dashboard = () => {
  return (
    <>
      <div className="adminContainer">
        <AdminSidebar />


        <main className="dashboard">
          <div className="dashboard_header">
            <FaSearch style={{ color: "rgb(17, 141, 240)" }} />
            <input type="text" name="" id="" placeholder="Search for data, users, docs" />
            <FaRegBell />
            <img src="https://avatars.githubusercontent.com/u/104254575?v=4" alt="" />
          </div>
          <Divider />


          <section className="widgetcontainer">
            <WidgetItem heading="Revenue" value={2000} percent={80} color="rgb(0,115,255)" amount={true} />
            <WidgetItem heading="Users" value={459} percent={-39} color="rgb(0,198,202)" />
            <WidgetItem heading="Transactions" value={2000} percent={52} color="rgb(255, 196,0)" />
            <WidgetItem heading="Products" value={1100} percent={43} color="rgb(76,0,255)" />
          </section>


          <section className="graphContainer">
            <div className="revenue-chart">
              <h2>Revenue & Transaction</h2>
              <BarChart data1={[300,144,433,655,247,755,190]} data2={[200,444,556,779,466,990,740]} title1="Revenue" title2="Transactions" bgColor1="rgb(0,115,255)" bgColor2="rgba(53,162,235,0.8)" />
            </div>
            <div className="inventory">
              <h2>Inventory</h2>
              <div>
                {
                  data.categories.map((item, index) => {
                    return (
                      <InventoryItem key={index} heading={item.heading} value={item.value} color={`hsl(${item.value * 4},${item.value}%,50%)`} />
                    )
                  })
                }
              </div>
            </div>
          </section>

          <section className="transactionContainer">
            <div className="genderChart">
              <h2>Gender Ratio</h2>
              <DoughnutChart data={[229, 192]} labels={["Male", "Female"]} bgColor={["rgba(53,162,235,0.8)", "hsl(340,82%,56%)"]} cutout={90} />
              <p><BiMaleFemale /></p>
            </div>

            <div className="transactionTable">
              Table here
            </div>
          </section>
        </main>


      </div>

    </>
  )
}

interface WidgetItemProps {
  heading: string,
  value: number,
  percent: number,
  color: string,
  amount?: boolean,
}
const WidgetItem = ({ heading, value, percent, color, amount = false }: WidgetItemProps) => {
  return (
    <>
      <article className="widget">
        <div className="widgetInfo">
          <p>{heading}</p>
          <h4>{amount ? `$${value}` : value}</h4>
          {
            percent > 0 ? <span className="green"><HiTrendingUp /> +{percent}%</span> : <span className="red"><HiTrendingDown /> {percent}%</span>
          }
        </div>

        <div className="widgetCircle" style={{
          background: `conic-gradient(${color} ${Math.abs(percent) / 100 * 360}deg, #eaeaea 0)`
        }}>
          <span style={{ color, fontWeight: 600 }}>{percent}%</span>
        </div>
      </article>
    </>
  )
}

interface InventoryItemProps {
  heading: string,
  value: number,
  color: string,
}
const InventoryItem = ({color,value, heading}: InventoryItemProps) => {
  return (
    <>
      <div className="inventoryItem">
        <h5>{heading}</h5>
        <div>
          <div style={{backgroundColor: color, width: `${value}%`}}></div>
        </div>
        <span>{value}%</span>
      </div>
    </>
  )
}
export default Dashboard
