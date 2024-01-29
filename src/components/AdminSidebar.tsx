import { IconType } from 'react-icons'
import { AiFillFileText } from 'react-icons/ai'
import { IoIosPeople } from 'react-icons/io'
import { MdShoppingBag } from 'react-icons/md'
import { RiDashboardFill } from 'react-icons/ri'
import { Link, Location, useLocation } from 'react-router-dom';
import logo from "../assets/logo.png";
import Divider from './Divider'
import { FaChartBar, FaChartLine, FaChartPie } from 'react-icons/fa'

const AdminSidebar = () => {
    const location = useLocation();

    return (
        <>
            <aside>
                <h2>
                    <img src={logo} alt="" />
                </h2>
                <div>
                    <ul>
                        <Li url="/admin/dashboard" text="Dashboard" location={location} Icon={RiDashboardFill} />
                        <Li url="/admin/product" text="Products" location={location} Icon={MdShoppingBag} />
                        <Li url="/admin/transaction" text="Transactions" location={location} Icon={AiFillFileText} />
                        <Li url="/admin/customer" text="Customers" location={location} Icon={IoIosPeople} />
                    </ul>
                </div>
                <Divider />
                <div>
                    <ul>
                        <Li url="/admin/chart/bar" text="Bar Charts" location={location} Icon={FaChartBar} />
                        <Li url="/admin/chart/pie" text="Pie Charts" location={location} Icon={FaChartPie} />
                        <Li url="/admin/chart/line" text="Line Charts" location={location} Icon={FaChartLine} />
                    </ul>
                </div>

            </aside>
        </>
    )
}

interface LiProps {
    url: string,
    text: string,
    location: Location,
    Icon: IconType,
}
const Li = ({ url, text, location, Icon }: LiProps) => {
    return (
        <>
            <li style={{
                backgroundColor: location.pathname === url ? "rgba(17, 141, 240,0.1)" : "",
            }}>
                <Link to={url} style={{
                    color: location.pathname === url ? "rgb(17, 141, 240)" : "",
                }} >
                    <Icon />
                    {text}
                </Link>
            </li>
        </>
    )
}


export default AdminSidebar
