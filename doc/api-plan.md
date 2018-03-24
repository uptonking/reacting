# api for reacting
reacting库的api设计 

## api设计

#### React

- Component
- PureComponent

- createElement()
- createFactory()
- cloneElement()
- isValidElement()
- React.Children

#### React.Component

- constructor()
- componentWillMount()
- render()
- componentDidMount()
  
- componentWillReceiveProps()
- shouldComponentUpdate()
- componentWillUpdate()
- render()
- componentDidUpdate()
  
- componentWillUnmount()
  
- setState()
- forceUpdate()
  
- 类属性
    - defaultProps
    - displayName
- 实例属性
    - props
    - state

#### ReactDOM

- render()
- unmountComponentAtNode()
- findDOMNode()


#### react api 参考

- 16.1

```js
var React = {
  Children: {
    map,
    forEach,
    count,
    toArray,
    only,
  },

  Component,
  PureComponent,
  unstable_AsyncComponent: AsyncComponent,

  createElement: __DEV__ ? createElementWithValidation : createElement,
  cloneElement: __DEV__ ? cloneElementWithValidation : cloneElement,
  createFactory: __DEV__ ? createFactoryWithValidation : createFactory,
  isValidElement: isValidElement,

  version: ReactVersion,

  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
    ReactCurrentOwner,
    // Used by renderers to avoid bundling object-assign twice in UMD bundles:
    assign,
  },
};
```

- 0.13

```js
var React = {

  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    only: onlyChild
  },

  Component: ReactComponent,

  DOM: ReactDOM,

  PropTypes: ReactPropTypes,

  initializeTouchEvents: function (shouldUseTouch) {
    EventPluginUtils.useTouchEvents = shouldUseTouch;
  },

  createClass: ReactClass.createClass,
  createElement: createElement,
  cloneElement: cloneElement,
  createFactory: createFactory,
  createMixin: function (mixin) {
    // Currently a noop. Will be used to validate and trace mixins.
    return mixin;
  },

  constructAndRenderComponent: ReactMount.constructAndRenderComponent,
  constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,

  findDOMNode: findDOMNode,
  render: render,

  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,

  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
  isValidElement: ReactElement.isValidElement,

  withContext: ReactContext.withContext,

  // Hook for JSX spread, don't use this for anything else.
  __spread: assign
};
```
