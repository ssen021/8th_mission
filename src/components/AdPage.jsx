import React, { Component } from "react";
import Ad from "./Ad";

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true, // 광고를 보이게 하려면 true로 초기화
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd, // showAd 상태를 토글하여 광고 show/hide
    }));
  };

  render() {
    return (
      <div>
        <Ad showAd={this.state.showAd} />
        {/* 버튼을 추가하고 클릭 시 handleToggleClick 메서드를 호출하여 광고 제어합니다. */}
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? "광고안보기" : "광고보기"}
        </button>
      </div>
    );
  }
}

export default AdPage;
