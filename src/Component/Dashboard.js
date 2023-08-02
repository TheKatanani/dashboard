import Welcome from "./DashboardComp/Welcome"
import QyuckDraft from "./DashboardComp/QyuckDraft"
import Targets from "./DashboardComp/Targets"
import Tickets from "./DashboardComp/Tickets"
import LastNews from "./DashboardComp/LastNews"
import LastTasks from "./DashboardComp/LastTasks"
import TopSearch from "./DashboardComp/TopSearch"
import LastUpload from "./DashboardComp/LastUpload"
import LastProject from "./DashboardComp/LastProject"
import Reminders from "./DashboardComp/Reminders"
import LatestPost from "./DashboardComp/LatestPost"
import Social from "./DashboardComp/Social"
import ProjectsTable from "./DashboardComp/ProjectsTable"
import "./Dashboard.css"
function Dashboard(){
return(
        <div className="Dashboard container  overflow-auto  ps-4">
            <div className="row d-flex  align-items-center justify-content-between">

                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <Welcome/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <QyuckDraft/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <Targets/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <Tickets/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <LastNews/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <LastTasks/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <TopSearch/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <LastUpload/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <LastProject/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <Reminders/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <LatestPost/>
                </div>
                <div className="box  container col-lg-4 p-0  col-md-6 col-sm-12">
                    <Social/>
                </div>
                <div className="box col-12">
                    <ProjectsTable/>
                </div>
            </div>
        </div>

    )
}
export default Dashboard;