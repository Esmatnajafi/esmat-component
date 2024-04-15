import style from './Select.module.css'
type SelectOptions = {
    label: string;
    value: any;
}


type SelectProps = {
    options: SelectOptions[];
    value?: SelectOptions;
    onchange: (value: SelectOptions | undefined) => void;
}



export function Select({value, onchange, options}: SelectProps) {
  return (
    <>
    <div className={style.container}>
        <span className={style.value}>Value</span>
        <button className={style["clear-btn"]}>&times;</button>
        <div className={style.divider}></div>
        <div className={style.caret}></div>
        <ul className={style.options}>
            {options.map(option => (
                <li className={style.option} key={option.label}>{option.label}                
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}


export default Select