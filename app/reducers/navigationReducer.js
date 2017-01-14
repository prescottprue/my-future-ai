export default function reducer(state = {
    links: [
      { href: '/goals', image: 'loupe', title: "Tools" },
      { href: '/connections', image: 'open-book', title: "Connections" },
      { href: 'logout', image: 'power-button', title: "Sign out", action: true },
    ]
  }, action) {

  return state;
}