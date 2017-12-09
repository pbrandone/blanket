/* eslint-disable react/prop-types */
/* globals window CustomEvent */
import React, { Component, createElement } from 'react';
import { Transition } from 'react-transition-group';
import createHistory from 'history/createBrowserHistory';

const historyExitingEventType = 'history::exiting';
const timeout = 400;
const styles = {
  entering: {
    opacity: 0
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1
  },
  exiting: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 0
  }
};

const getUserConfirmation = (pathname, callback) => {
  const event = new CustomEvent(historyExitingEventType, { detail: { pathname } });

  window.dispatchEvent(event);

  setTimeout(() => {
    callback(true);
  }, timeout);
};

const history = createHistory({ getUserConfirmation });

// block must return a string to conform
history.block((location) => location.pathname);

exports.replaceHistory = () => history;

class ReplaceComponentRenderer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      exiting: false,
      nextPageResources: {}
    };

    this.listenerHandler = this.listenerHandler.bind(this);
  }

  componentDidMount() {
    window.addEventListener(historyExitingEventType, this.listenerHandler);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.location.key !== nextProps.location.key) {
      this.setState({
        exiting: false,
        nextPageResources: {}
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener(historyExitingEventType, this.listenerHandler);
  }

  listenerHandler(event) {
    const nextPageResources = this.props.loader.getResourcesForPathname(
      event.detail.pathname,
      nextPageResources => this.setState({ nextPageResources })
    ) || {};

    this.setState({
      exiting: true,
      nextPageResources
    });
  }

  render() {
    const transitionProps = {
      timeout: {
        enter: 0,
        exit: timeout
      },
      appear: true,
      in: !this.state.exiting,
      key: this.props.location.key
    };

    return (
      <Transition {...transitionProps}>
        {
          (status) => {
            return (
              <div style={styles[status]}>
                {createElement(this.props.pageResources.component, {
                  ...this.props,
                  ...this.props.pageResources.json
                })}
              </div>
            );
          }
        }
      </Transition>
    );
  }
}

// eslint-disable-next-line
exports.replaceComponentRenderer = ({ props, loader }) => {
  if (props.layout) {
    return null;
  }

  return createElement(ReplaceComponentRenderer, { ...props, loader });
};
