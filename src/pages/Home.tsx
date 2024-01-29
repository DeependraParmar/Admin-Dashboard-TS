import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
        <Link to="/admin/dashboard">Go to Dashboard</Link>
    </div>
  )
}

export default Home
