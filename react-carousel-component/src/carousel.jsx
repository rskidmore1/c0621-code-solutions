import React from 'react';

class Images extends React.Component {

  constructor(props) {
    super(props);
    this.state = { count: 1 };
    this.count = this.count.bind(this);
    this.advance = this.advance.bind(this);
    this.backwards = this.backwards.bind(this);
    this.iconClick = this.iconClick.bind(this);

  }

  count() {
    let increase = this.state.count;
    if (increase < 5) {
      increase++;
      this.setState({ count: increase });
    } else {
      increase = 1;
      this.setState({ count: increase });
    }
  }

  iconClick(event) {

    const pictureCount = event.target.getAttribute('iconid');
    this.setState({ count: Number(pictureCount) });
  }

  advance() {

    let increase = this.state.count;
    if (increase < 5) {
      increase = increase + 1;
      this.setState({ count: increase });
    } else {
      increase = 1;
      this.setState({ count: increase });
    }
  }

  backwards() {

    let backcount = this.state.count;

    if (backcount === 1) {
      backcount = 5;
      this.setState({ count: backcount });
    } else {
      backcount--;
      this.setState({ count: backcount });
    }

  }

  componentDidMount() {
    setInterval(this.advance, 3000);
  }

  render() {

    const poke = this.props.poke;

    const pkClass = 'view hidden';

    return (
      <React.Fragment>
        <div className="row">
          <React.Fragment>
            <div className="col outer-width vertical-center"><i className="fas fa-chevron-left icon-size" onClick={this.backwards}></i></div>
          </React.Fragment>
          <div className="col center-width">
            {poke.map(pokeName =>

              <div className={Number(pokeName.id) === this.state.count ? 'view' : pkClass} key={pokeName.name} data-view={pokeName.id}>

                <img src={pokeName.image} alt="" />

              </div>

            )}

          </div>
          <React.Fragment>

            <div className="col outer-width vertical-center"><i className="fas fa-chevron-right icon-size" onClick={this.advance}></i></div>

          </React.Fragment>

        </div>
        <div className="row">
          <div className="col dots">
            {poke.map(pokeName =>
              <i onClick={this.iconClick} className={Number(pokeName.id) === this.state.count ? 'fas  fa-circle ' + pokeName.id : 'far fa-circle ' + pokeName.id} iconid={pokeName.id} key={pokeName.name}></i>
            )}
          </div>

        </div>
      </React.Fragment>
    );
  }

}

class Carousel extends React.Component {

  render() {
    const input = this.props.input;
    return (
      <div className="view-container">

        <Images poke={input} />

      </div>

    );
  }
}

export default Carousel;
