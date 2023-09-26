import {ComponentPropsWithoutRef, forwardRef} from 'react'

import s from './header.module.scss'

export let Header = forwardRef(({ children, className, ...restPros }: ComponentPropsWithoutRef<'header'>) => {
    return (
        <header className={`${s.header} ${className}`} {...restPros}>
            {children}
        </header>
    )
})

// export const Header = forwardRef<HTMLHeadElement, ComponentPropsWithoutRef<'header'>>((
//   ({
//      children,
//      className,
//      ...restProps
//    },
//    ref
//   ) => {
//     // Рендеринг компонента
//     return <header ref={ref} className={`${s.header} ${className}`} {...restProps}>{children}</header>
// }):
