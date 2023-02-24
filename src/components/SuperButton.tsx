import React from "react";
import s from './SuperButton.module.css'

type SuperButtonPropsType = {
    callback: () => void
    color?: string
    children:React.ReactNode
    size?:"Big"
    disabled?:boolean

}
export const SuperButton: React.FC<SuperButtonPropsType> = (props) => {

    const {callback, color, children,disabled, ...otherProps}=props

    const onClickHandler = () => {
        callback()
    }
    // const finalClassName =`${s.button} ${s.default}`

    // const finalClassName =`${s.button}
    //  ${color==='red' ? s.red : s.default}
    //  ${disabled  ? s.disabled : ""}


    const finalClassName =`${s.button}
     ${color==='red' ? s.red : color ==='secondary' ? s.secondary : s.default }
     ${disabled  ? s.disabled : ""}
     `

    return (
        <div>
            <button className={finalClassName} onClick={onClickHandler}>{children}</button>
        </div>
    )


}



// const finalClassName =s.button
//     + (disabled
//         ? ' ' + s.disabled
//         : color === 'red'
//             ? ' ' + s.red
//             : color === 'secondary'
//                 ? ' ' + s.secondary
//                 : ' ' + s.default)
//     + (className ? ' ' + className : '')

// export const SuperButton: React.FC<SuperButtonPropsType> = ({callback, color,children,...props}) => {
//
//     const onClickHandler = () => {
//         callback()
//     }
//
//     return (
//         <div>
//             <button onClick={onClickHandler}>{children}</button>
//         </div>
//     )
// }