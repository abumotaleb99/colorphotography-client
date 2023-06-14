import React from "react";
import useUser from "../../hooks/useUser";
import moment from "moment/moment";

const Dashboard = () => {
  useEffect(() => {
    document.title = "ColorPhotography | Dashboard";
  }, []);

  const [isUser] = useUser();

  return (
    <div>
      <div className="border-b-2 pb-6">
        <h2 className="text-4xl font-bold">Welcome back, {isUser?.name} !</h2>
        <h2>{moment().format("MMMM D, dddd")}</h2>
      </div>
    </div>
  );
};

export default Dashboard;
