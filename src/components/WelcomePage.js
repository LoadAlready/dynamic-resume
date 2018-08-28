import React, { Component } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentEffect: "animated jello",
      currentEffectRepeat: "infinite",
      currentEffectSpeed: "fast",
      currentEffectDelay: "delay-1s",
      baseClassName: "welcome-component-title",
      currentClassName:
        "animated bounce infinite delay-2s welcome-component-title",
      remountEffect: false
    };
  }
  onEffectNameChange = event => {
    this.setState({
      currentEffect: event.target.value,
      remountEffect: !this.state.remountEffect
    });
  };
  onSpeedChange = event => {
    this.setState({
      currentEffectSpeed: event.target.value,
      remountEffect: !this.state.remountEffect
    });
  };

  onRepeatChange = event => {
    this.setState({
      currentEffectRepeat: event.target.value,
      remountEffect: !this.state.remountEffect
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.remountEffect) {
      this.setState({
        currentClassName: `${this.state.currentEffect} ${
          this.state.currentEffectDelay
        } ${this.state.currentEffectRepeat} ${this.state.currentEffectSpeed} ${
          this.state.baseClassName
        }`,
        remountEffect: !this.state.remountEffect
      });
      this.renderContent();
    }
  }

  renderContent = () => {
    return (
      <fragment>
        <h1 className={this.state.currentClassName}>WELCOME</h1>
        <form className="welcome-current-effect-dropdown-form">
          {/* effect type */}
          <Select
            value={this.state.currentEffect}
            onChange={event => this.onEffectNameChange(event)}
            className="welcome-effects-menu"
          >
            <MenuItem value="none">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"animated jello"}>Jello</MenuItem>
            <MenuItem value={"animated flash"}>Flash</MenuItem>
            <MenuItem value={"animated swing"}>Swing</MenuItem>
          </Select>

          {/* effect speed */}
          <Select
            value={this.state.currentEffectSpeed}
            onChange={event => this.onSpeedChange(event)}
            className="welcome-effects-menu"
          >
            <MenuItem value={"slow"}>2 Second</MenuItem>
            <MenuItem value={"slower"}>3 Seconds</MenuItem>
            <MenuItem value={"fast"}>800 MS</MenuItem>
            <MenuItem value={"faster"}>500 MS</MenuItem>
          </Select>

          {/* effect repeat */}
          <Select
            value={this.state.currentEffectRepeat}
            onChange={event => this.onRepeatChange(event)}
            className="welcome-effects-menu"
          >
            <MenuItem value={"infinite"}>On</MenuItem>
            <MenuItem value={"Off"}>Off</MenuItem>
          </Select>
        </form>
      </fragment>
    );
  };

  render() {
    return <div className="welcome-component">{this.renderContent()}</div>;
  }
}
