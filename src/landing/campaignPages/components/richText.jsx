import styles from './richText.module.css';

const RichText = ({children}) => {
    return (
        <div className={`${styles.container}`}>
            {children}
        </div>
    )
}

export default RichText;