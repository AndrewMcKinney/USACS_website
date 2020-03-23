import React from "react"
import SidebarItem from "./SidebarItem"


class Sidebar extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            activeTab : this.props.children[0].props.label
        }
    }

    onClickTabItem = (tab) => {
        this.setState( { activeTab:tab } )
    }


    render() {
        const {
            onClickTabItem,
            props: {
                children
            },
            state: {
                activeTab
            }
        } = this

        return (
            <div className = "tabs">
                <div className = "Sidebar">
                        {children.map((child) => {
                            const label = child.props.label
                            
                            return (
                                <SidebarItem 
                                    label = {label}
                                    key = {label}
                                    activeTab = {activeTab}
                                    onClick = {onClickTabItem}
                                />
                            )
                        })}
                </div>
                <div className = "Profile-container">
                    {children.map( (child) => {
                        if(child.props.label !== activeTab) 
                            return undefined
                        return child
                    })}
                </div>
            </div>
        )

    }
}


export default Sidebar