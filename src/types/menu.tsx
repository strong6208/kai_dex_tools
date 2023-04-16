import React from "react"

import { IconProps } from "src/types/icon"

export type Label = {
    id?: string
    label: string
    icon?: any
    path?: string
    subMenu?: Label[]
}


