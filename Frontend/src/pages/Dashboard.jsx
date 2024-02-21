import { useSelector } from "react-redux";

const DashboardPage = () => {
     const { userInfo } = useSelector((state) => state.auth);

     return (
       <div>
         <h1>Welcome, {userInfo.first_name} </h1>
       </div>
     );
}

export default DashboardPage