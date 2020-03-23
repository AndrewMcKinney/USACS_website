import React from "react"
class Profile extends React.Component {
//asdf
    render() {
        
        const { person } = this.props

        const images = require.context('./images/', true)
        console.log(images)
        let img = images(('./' + person.name + ".jpg").replace(" ", "_"))

        return (
            <div className = "Profile">
                
                <div className = "text-container">
                    <h1> {person.name}</h1>
                    <h3> {person.birth}-{person.death}</h3>
                    <br/>
                    <p> {person.description} </p>
                </div>
                <div className = "img-container">
                    <img src = {img} 
                        alt = "failed to load"
                    />
                </div>
                
            </div>
        )
    }
}


export default Profile