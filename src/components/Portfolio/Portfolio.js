
import Card from "../Card/Card"

function Portfolio() {
    return(

       
        <div className="w-75 flex-ns center">
            <div class="fl w-100 w-50-ns bg-near-white tc">
                <Card 
                img={"bitcoin.png"}
                name={"CryptoPURRency"}
                github={<a href="https://www.github.com/Settc/cryptoPURRency">Github link</a>}
                deployed={<a href="https://settc.github.io/CryptoPURRency/">Live link</a>}
                />
                <Card 
                img={"teamprofile.png"}
                name={"Team Profile Manager"}
                github={<a href="https://github.com/Settc/team-profile-manager">Github link</a>}
                
                />
                <Card 
                img={"dayplannerscreenshot.png"}
                name={"Day Planner"}
                github={<a href="https://www.github.com/Settc/day-planner">Github link</a>}
                deployed={<a href="https://settc.github.io/day-planner/">Live link</a>}
                />
            </div>
            <div class="fl w-100 w-50-ns bg-light-gray tc">
                <Card 
                img={"edm.png"}
                name={"Employee Database Manager"}
                github={<a href="https://www.github.com/Settc/employee-database-manager">Github link</a>}
                
                />
                <Card 
                img={"Capture.PNG"}
                name={"Weather Dashboard"}
                github={<a href="https://www.github.com/Settc/weather-app">Github link</a>}
                deployed={<a href="https://settc.github.io/weather-app/">Live link</a>}
                />
                <Card 
                img={"screenshot.png"}
                name={"Note Taker"}
                github={<a href="https://www.github.com/Settc/notes">Github link</a>}
                deployed={<a href="https://isolated-horizon.herokuapp.com/notes">Live link</a>}
                /> 
            </div>
            
            
            
        </div>
    )
}

export default Portfolio