import Landing from "../../components/user/landing/Landing"
import Recient from "../../components/user/recient/Recient"

const Home = () => {
    return (
        <div className=" max-w-[85%]">
            <Landing/>
            <Recient/>
        </div>
    )
}

export default Home