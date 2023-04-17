import '../../css/App.css'
import Card from './Cards'
import Stats from './Stats'
import Footer from './Footer'

export default function Main() {
  return (
    <div>
      <div data-aos="fade-up">
      <Card></Card>
      </div>
      <div data-aos="fade-down">
      <Stats/>
      </div>
    </div>
  )
}


