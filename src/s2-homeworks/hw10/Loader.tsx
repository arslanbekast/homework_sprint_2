import s from './Loader.module.css'
import loading from './loading.gif'

export const Loader = () => <div className={s.loader}><img src={loading} alt=""/></div>
