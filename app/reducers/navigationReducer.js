export default function reducer(state = {
    links: [
      { href: '/', title: "Home" },
      { href: '/goals', title: "Goals" },
      { href: '/connections', title: "Connections" },
      { href: '/', title: "Sign out" },
    ]
  }, action) {

  return state;
}