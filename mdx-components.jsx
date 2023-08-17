function Ok({children}){
  return <li>
    hougahouhgag hougaaaa
    {children}
    ahhhhhhhhhh !!!!!!!!!!!
  </li>
}

export function useMDXComponents(components) {
  return { li: Ok, ...components }
}
