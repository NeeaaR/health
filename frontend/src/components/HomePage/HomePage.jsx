import '../../css/App.css'
import Navbar from '../Navbar'
import Footer from './Footer'
import Header from './Header'
import Main from './Main'
import ReviewsSlider from './Slider'


export default function Home() {
  // const { user } = useSelector(state => state.auth);
  // const { profile, loading } = useSelector(state => state.profile);
  // const { articles } = useSelector(state => state.articles);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCurrentProfile())
  // }, [dispatch]);



  return (
    <div>
      <Navbar />
      <Header/>
      <Main/>
      <ReviewsSlider/>
      <Footer/>
    </div>
  )
}

