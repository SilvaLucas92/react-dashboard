
import Users from './Users';
import Products from './Products';
import TopBar from './TopBar';
import Categories from './Categories';
import LastPdt from './LastPdt';
function Home() {

    return(
        <main>           
            <div className='container'> 
                <TopBar /> 
            </div>  
            <div  className='container-main'>             
                <LastPdt />
                <Categories />
                <Users />
                <Products/>
            </div>  
        </main>
    )
}
export default Home;