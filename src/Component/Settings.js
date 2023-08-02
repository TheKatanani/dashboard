import "./Dashboard.css"
import Site from "./SettingsComp/Site"
import General from "./SettingsComp/General"
import Security from "./SettingsComp/Security"
import Social from "./SettingsComp/Social"
import Widgets from "./SettingsComp/Widgets"
import Backup from "./SettingsComp/Backup"

function Settings(){
return(
        <div className="Setting container overflow-auto">
 <div className="row d-flex  align-items-center justify-content-between">

                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <Site/>
                </div>
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <General/>
                </div>
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <Security/>
                </div>
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <Social/>
                </div>
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <Widgets/>
                </div>
                <div className="box rounded col-lg-4 p-0  col-md-6 col-sm-12">
                    <Backup/>
                </div>
                
            </div>
        </div>

    )
}
export default Settings;