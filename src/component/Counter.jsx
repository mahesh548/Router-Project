import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
      log: false,
      count: 0,
    };
  }

  updateEvent = (txt, type) => {
    this.setState((prev) => {
      return {
        events: [...prev.events, { txt, type }],
      };
    });
  };

  componentDidMount() {
    this.updateEvent("Component mounted..", " bg-warning text-warning-content");
  }
  componentDidUpdate() {
    if (this.state.log) {
      this.updateEvent("Component updated!", "warning");
      this.setState({ log: false });
    }
  }
  componentWillUnmount() {
    const { showModal } = this.props;
    showModal("Component Unmounted Bye...");
  }

  render() {
    const { name, subtitle } = this.props;
    const { events, count } = this.state;
    return (
      <>
        <div className="container pb-20">
          <div className="hero min-h-50">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">{name}</h1>
                <p className="py-6">{subtitle}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row m-auto w-100 justify-center mt-5 gap-5 items-center">
            <button
              className="btn btn-circle btn-primary text-2xl font-bold p-8 "
              onClick={function () {
                this.setState((prev) => ({ count: prev.count - 1, log: true }));
              }.bind(this)}
            >
              -
            </button>
            <h1 className="btn btn-secondary p-8 btn-wide rounded-4xl text-5xl font-bold">
              {count}
            </h1>
            <button
              className="btn btn-circle btn-primary text-2xl font-bold p-8 "
              onClick={() => {
                this.setState((prev) => ({ count: prev.count + 1, log: true }));
              }}
            >
              +
            </button>
          </div>
          <div className="mockup-code w-md m-auto mt-6">
            <pre data-prefix="$">
              <code>Component activity logs start</code>
            </pre>
            {events.map(({ txt, type }, i) => {
              return (
                <pre
                  data-prefix=">"
                  className={"text-" + type}
                  key={"event" + i}
                >
                  <code>{txt}</code>
                </pre>
              );
            })}

            <pre data-prefix=">">
              <code>Ends!</code>
            </pre>
          </div>
        </div>
      </>
    );
  }
}
export default Counter;
