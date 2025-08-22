import React from "react";

export default class ClasseAltura extends React.Component {
    render() {
        return (
            <div>
                <label>Digite sua altura (m):</label>
                <input type="number" value={this.props.altura} onChange={(e) => this.props.setAltura(e.target.value)} />
            </div>
        );
    }
};
