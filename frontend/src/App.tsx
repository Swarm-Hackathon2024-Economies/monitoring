
import styles from './App.module.scss'

export const App = () => {

  return (
    <div className={styles.appArea}>
        <div className={styles.liveArea}>
            <h1>ライブ映像</h1>
            <img src="https://stat.ameba.jp/user_images/20230621/07/cafedetakah/fd/13/j/o0512051215302209514.jpg" alt="liveImage"/>
        </div>
        <div className={styles.stateArea}>
            <h1>運転状態</h1>
            <p>運転中</p>
            <p>スマホ操作中</p>
            <p>検知状態</p>
            <p>画像検知</p>
        </div>
    </div>
  )
}

export default App
