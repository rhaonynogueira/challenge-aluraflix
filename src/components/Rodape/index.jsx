import styles from './Rodape.module.css'
import imgRodape from '../Cabecalho/LogoMain.png'

function Rodape(){
    return(
       <footer className={styles.rodape}>
        <img src={imgRodape} alt="" />
       </footer>
    )
}

export default Rodape
