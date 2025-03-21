import Navbar from '../components/navigation/Navbar';
import Article from '../components/ui/article';
import Interactivebox from '../components/ui/caculator-box';



const Home = () => {
    return (
        <>
            <Navbar />
            <main style={{ padding: '20px', textAlign: 'center' }}>
                <h1>Welcome to EnviroBlog</h1>
                <p>Learn how to contribute to a sustainable future!</p>
                <section style={{ marginTop: '30px', textAlign: 'left' }}>
                    
                    <Article />   

                </section>
                <Interactivebox />
            </main>
        </>
    );
};

export default Home;