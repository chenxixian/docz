export const imports = {
  'Alert.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "alert" */ 'Alert.mdx'),
  'hello-world.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "hello-world" */ 'hello-world.mdx'
    ),
  'Button.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "button" */ 'Button.mdx'
    ),
}
