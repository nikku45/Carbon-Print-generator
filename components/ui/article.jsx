
const Article = () => {
    return (
        <article style={{ maxWidth: "100%", margin: '30px auto', padding: '20px', background: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', lineHeight: '1.8' }}>
            <header style={{ marginBottom: '20px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333' }}>Environmental Sustainability: A Path to a Greener Future</h1>
                <p style={{ fontSize: '16px', color: '#555' }}>By EnviroBlog Team - March 22, 2025</p>
            </header>
            <section style={{ textAlign: 'justify', color: '#444', fontSize: '16px' }}>
            <h2 style={{ fontSize: '20px', marginTop: '20px', color: '#4CAF50' }}>What is Evironmental Sustainablity</h2>
                <p>
                In the current global context, environmental sustainability has never been more important. The undeniable realities of climate change, marked by extreme weather events, rising sea levels, and changing weather patterns, highlight the repercussions of neglecting sustainable practices. 

Meanwhile, environmental degradation jeopardises the health of ecosystems and the services they offer, such as clean air, water, and food. Unsustainable human activities, ranging from deforestation to pollution, are pushing countless species towards extinction and threatening the balance of our environment. Addressing these issues is not just a matter of environmental concern but is fundamental to ensuring economic stability, social equity, and the survival of life as we know it.
                </p>
                    <h2 style={{ fontSize: '20px', marginTop: '20px', color: '#4CAF50' }}>Key Pillart Of Sustainablity</h2>
              
                <p>
                Environmental sustainability represents a multifaceted approach to ensuring that human activities are conducted in harmony with the natural world, allowing both current and future generations to thrive. To address the challenges of sustainability, three key pillars have been identified (also known as the 3 E's): environment, economy, and social equity. Each pillar holds equal importance, and only by considering all three can true sustainability be achieved
                </p>
                <h3 style={{ fontSize: '20px', marginTop: '20px', color: '#4CAF50' }}>Sustainable Enviornment</h3>
                <p>
                Central to the concept of sustainability is the maintenance of ecological balance. This means ensuring that the rate of resource consumption does not outpace the natural replenishment rate. Healthy ecosystems, from forests to oceans, provide essential services such as carbon sequestration, water purification, and habitat provision. By preserving these ecosystems and promoting biodiversity, we not only safeguard the survival of countless species but also maintain the planet's capacity to support human life. Conservation, restoration, and responsible resource management are crucial actions to ensure environmental stability.
                </p>
                <img src="https://img.freepik.com/free-vector/ecology-infographic-with-photo_52683-36214.jpg?t=st=1742602386~exp=1742605986~hmac=bfd73f037d636ebf242f2be01c684d6719cb86ba7ee5eb13826d1bcb45dc214c&w=2000" alt="Pollution" style={{ margin:"auto"
                     ,width: '80%', marginTop: '20px' }} />
                <h3 style={{ fontSize: '20px', marginTop: '20px', color: '#4CAF50' }}>Social Equity</h3>
                <h3 style={{ fontSize: '20px', marginTop: '20px', color: '#4CAF50' }}>Sustainable Economy</h3>
                <p>
                For sustainability initiatives to be lasting, they must also take into consideration economic sustainability. This doesn't mean prioritising profit over the environment; rather, it means finding harmony where businesses can prosper without degrading ecological systems. Sustainable economic practices look at long-term gains, taking into account the full lifecycle costs and benefits of actions. This approach often leads to innovations that reduce waste, increase efficiency, and create green jobs. A sustainable economy is one that recognises the inherent value of the environment and integrates it into its growth strategies, ensuring resilience and adaptability in a changing world.
                </p>
                <h2 style={{ fontSize: '20px', marginTop: '20px', color: '#4CAF50' }}>Simple Actions You Can Take</h2>
                <ul style={{ listStyleType: 'circle', paddingLeft: '20px', marginTop: '10px' }}>
                    <li>Reduce plastic usage by opting for reusable bags and containers.</li>
                    <li>Conserve energy by switching to LED lights and unplugging unused devices.</li>
                    <li>Plant trees and support reforestation projects.</li>
                    <li>Embrace a more plant-based diet to reduce your carbon footprint.</li>
                </ul>
                <h2 style={{ fontSize: '20px', marginTop: '20px', color: '#4CAF50' }}>Role of Technology in Sustainability</h2>
                <p>
                    Advances in technology play a pivotal role in promoting sustainability. Renewable energy sources like solar and wind power, AI-driven waste management systems, and precision agriculture are transforming the way we use resources and reduce environmental impact.
                </p>
            </section>
            <footer style={{ marginTop: '30px', textAlign: 'center' }}>
                <p style={{ fontSize: '14px', color: '#777' }}>Together, we can make a difference. Join us in building a sustainable future!</p>
            </footer>
        </article>
    );
};

export default Article;