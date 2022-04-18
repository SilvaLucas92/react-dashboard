
import Users from './Users';
import Products from './Products';
import TopBar from './TopBar';
import Categories from './Categories';
import Div from './Div';
function Home() {

    return(
        <main>
            <Div />           
            <div className='container'> 
                <TopBar />                
                <Products/>
                <Users />
                <Categories />
            </div>
            <Div />
        </main>
    )
}
export default Home;