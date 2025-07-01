import type { ReactNode } from "react"

export interface Project {
  name: string
  img: string
  link: string
}

export interface SocialLink {
  link: string
  icon: ReactNode
}

export interface Technology {
  name: string
  icon: ReactNode
  /**
   * Gradient from (I guess it should be renamed, but it looks good for now)
   */
  from: string
  /**
   * Gradient to (I guess it should be renamed, but it looks good for now)
   */
  to: string
}
