import style from './Preloader.module.css'

let Preloader = () => {
    return <div className={style.preloaderWrapper}>
        <img
            src={'https://www.svgrepo.com/download/41953/loading.svg'}
            className={style.imgPreloader}
            alt={''}
        />
    </div>
}

export default Preloader