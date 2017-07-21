export default class ReduxClazz {

  props: {}

  unMount: () => {}

  constructor(props, unMount) {
    this.props   = props
    this.unMount = unMount
  }

  receiveProps = (nextProps) => {
    if (typeof this.clazzWillReceiveProps === 'function') {
      this.clazzWillReceiveProps(nextProps)
    }

    this.props = {
      ...this.props,
      ...nextProps
    }
  }
}
