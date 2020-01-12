import React from "react";
import  './Layout.css'

class Layout extends React.Component {
    render() {
        return (
            <div className={'Layout'}>
                <main className={'Layout main'}>
                    {this.props.children}
                </main>
            </div>
        )
    }

}

export default Layout;