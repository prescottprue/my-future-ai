export default function reducer(state = {
    links: [
      { href: '/', title: "Home" },
      { href: '/goals', title: "Tools" },
      { href: '/connections', title: "Connections" },
      { href: 'logout', title: "Sign out", action: true },
    ]
  }, action) {

  return state;
}