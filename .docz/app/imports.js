export const imports = {
  'Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "alert" */ 'Alert.mdx'),
  'Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "button" */ 'Button.mdx'
    ),
  'hello-world.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "hello-world" */ 'hello-world.mdx'
    ),
  'mdnow.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "mdnow" */ 'mdnow.mdx'),
  'template.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "template" */ 'template.mdx'
    ),
}
