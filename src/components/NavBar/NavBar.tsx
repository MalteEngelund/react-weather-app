import { Children } from "react";
import style from './NavBar.module.scss'

interface NavBarProps {
  children: React.ReactNode
  id?: string
}

export function NavBar({ children, id }: NavBarProps) {

  return (

    <nav id={id}>
      <ul>
        {children}
      </ul>
    </nav>
  )
}