import React from "react"

class SidebarItem extends React.Component {
    onClick = () => {
        const {label, onClick} = this.props
        onClick(label)
    }

    render () {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this
        //only needs active tab to check if this is the tab that is active
        //this information can be used to change the look of the selected item
        let className = "sidebar-item"
        if(activeTab === label)
            className += "active-sidebar-item"

        return (
            <dir className = {className} onClick = {onClick}>
                {label}
            </dir>
        )
    }

}
export default SidebarItem