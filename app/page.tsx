import Navbar from '../components/navigation/Navbar';
import Article from '../components/ui/article';
import Interactivebox from '../components/ui/caculator-box';



const Home = () => {
    return (
        <>
            <Navbar />
            <main style={{ padding: '20px', textAlign: 'center' }}>
               
                <section style={{ marginTop: '30px', textAlign: 'left' }}>
                    
                    <Article />   

                </section>
                <Interactivebox />
            </main>
        </>
    );
};

export default Home;