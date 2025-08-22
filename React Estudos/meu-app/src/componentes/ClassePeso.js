import React from "react";

export default class ClassePeso extends React.Component {
    render() {
        return (
            <div>
                <label>Digite seu peso (kg):</label>
                <input type="number" value={this.props.peso} onChange={(e) => this.props.setPeso(e.target.value)} />
            </div>
        );
    }
};