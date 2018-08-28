import React, { Component } from "react";
import Select from "@material-ui/core/Select";

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

  onContinueClick = () => {};

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
            <option className="welcome-effects-menu-item" value="none">
              <em>None</em>
            </option>
            <option
              className="welcome-effects-menu-item"
              value={"animated jello"}
            >
              Jello
            </option>
            <option
              className="welcome-effects-menu-item"
              value={"animated flash"}
            >
              Flash
            </option>
            <option
              className="welcome-effects-menu-item"
              value={"animated swing"}
            >
              Swing
            </option>
          </Select>

          {/* effect speed */}
          <Select
            value={this.state.currentEffectSpeed}
            onChange={event => this.onSpeedChange(event)}
            className="welcome-effects-menu welcome-effects-menu-center"
          >
            <option className="welcome-effects-menu-item" value={"slow"}>
              2 Second
            </option>
            <option className="welcome-effects-menu-item" value={"slower"}>
              3 Seconds
            </option>
            <option className="welcome-effects-menu-item" value={"fast"}>
              800 MS
            </option>
            <option className="welcome-effects-menu-item" value={"faster"}>
              500 MS
            </option>
          </Select>

          {/* effect repeat */}
          <Select
            value={this.state.currentEffectRepeat}
            onChange={event => this.onRepeatChange(event)}
            className="welcome-effects-menu"
          >
            <option className="welcome-effects-menu-item" value={"infinite"}>
              On
            </option>
            <option className="welcome-effects-menu-item" value={"Off"}>
              Off
            </option>
          </Select>
        </form>
        {/* continue to content */}
        <div className="welcome-page-continue">
          <button onClick={this.onContinueClick}>Enough Already</button>
        </div>
      </fragment>
    );
  };

  render() {
    return <div className="welcome-component">{this.renderContent()}</div>;
  }
}
