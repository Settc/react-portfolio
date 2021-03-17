
import Card from "../Card/Card"

function Portfolio() {
    return(

       
        <div className="w-75 flex-ns center">
            <div class="fl w-100 w-50-ns bg-near-white tc">
                <Card 
                img={"bitcoin.png"}
                name={"CryptoPURRency"}
                github={<a href="https://www.github.com">Github link</a>}
                deployed={"Here's a deployed link"}
                />
                <Card 
                img={"teamprofile.png"}
                name={"Employee Tracker"}
                github={"Here's a github"}
                deployed={"Here's a deployed link"}
                />
                <Card 
                img={"dayplannerscreenshot.png"}
                name={"Employee Tracker"}
                github={"Here's a github"}
                deployed={"Here's a deployed link"}
                />
            </div>
            <div class="fl w-100 w-50-ns bg-light-gray tc">
                <Card 
                img={"edm.png"}
                name={"Employee Tracker"}
                github={"Here's a github"}
                deployed={"Here's a deployed link"}
                />
                <Card 
                img={"Capture.PNG"}
                name={"Employee Tracker"}
                github={"Here's a github"}
                deployed={"Here's a deployed link"}
                />
                <Card 
                img={"screenshot.png"}
                name={"Employee Tracker"}
                github={"Here's a github"}
                deployed={"Here's a deployed link"}
                /> 
            </div>
            
            
            
        </div>
    )
}

export default Portfolio