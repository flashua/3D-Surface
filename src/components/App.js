import React from "react";
import AppBar from "material-ui/AppBar";
import LeftNav from "material-ui/Drawer";
import MenuItem from "material-ui/MenuItem";
import Divider from "material-ui/Divider";
import Toggle from "material-ui/Toggle";
import ViewPort from "./ViewPort.js";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const styles = {
    toggle: {
        maxWidth: '13rem',
        padding: '1rem'
    }
};

export default class App extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.menu = this.menu.bind(this);
        this.material = this.material.bind(this);
        this.vertex = this.vertex.bind(this);
        this.parametric = this.parametric.bind(this);

        this.state = {
            open: false,
            isVertex: true,
            isHeat: false
        };
    }

    render() {
        const isHeat = this.state.isHeat;
        const isVertex = this.state.isVertex;
        const isOpen = this.state.open;
        return (
            <MuiThemeProvider>

                <section>
                    <AppBar title='3D Surface' onLeftIconButtonTouchTap={this.menu}/>
                    <LeftNav docked={false} open={isOpen} onRequestChange={open => this.setState({open})}>
                        <MenuItem disabled>Surface types</MenuItem>
                        <Divider />
                        <MenuItem insetChildren checked={isVertex} onTouchTap={this.vertex}>Vertex</MenuItem>
                        <MenuItem insetChildren checked={!isVertex} onTouchTap={this.parametric}>Parametric</MenuItem>
                        <Divider />
                        <Toggle label="Heat map" toggled={isHeat} style={styles.toggle} onToggle={this.material}/>
                    </LeftNav>
                    <ViewPort type={isVertex} heat={isHeat}/>
                </section>
            </MuiThemeProvider>
        );
    }

    menu() {
        this.setState({open: !this.state.open});
    }

    material() {
        this.setState({isHeat: !this.state.isHeat});
    }

    vertex() {
        this.setState({isVertex: true, open: false});
    }

    parametric() {
        this.setState({isVertex: false, open: false});
    }
}
