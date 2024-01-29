import { FaRegBell, FaSearch } from "react-icons/fa"
import AdminSidebar from "../components/AdminSidebar"
import Divider from "../components/Divider"
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi"

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
            <WidgetItem heading="Revenue" value={2000} percent={20} color="green" amount={true} />
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
const WidgetItem = ({ heading, value, percent, color, amount }: WidgetItemProps) => {
  return (
    <>
      <article className="widget">
        <div className="widgetInfo">
          <p>{heading}</p>
          <h4>{amount ? `$${value}` : value}</h4>
          {
            percent > 0 ? <span className="green"><HiTrendingUp /> +{percent}%</span> : <span className="red"><HiTrendingDown /> {percent}%</span>
          }
          <p>{color}</p>
        </div>
      </article>
    </>
  )
}

export default Dashboard
