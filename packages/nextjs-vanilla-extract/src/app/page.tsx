import { button, myStyle, secondary } from './page.css'

export default function Home() {
  return (
    <main>
      <div className={myStyle}>안녕하세요</div>
      <div className={secondary}>secondary</div>
      <button className={button['solid']}>solid 버튼</button>
    </main>
  )
}
