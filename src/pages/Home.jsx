import style from '../style/Home.module.css';

const Home = () => {
  const paragraphStyle = {
    textAlign: 'center',
    color: '#222',
    fontWeight: '300',
  };

  return (
    <div className={style.container}>
      <h2>Welcome to our page!</h2>
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, alias exercitationem! Est,
        quisquam dolores fuga maxime fugiat exercitationem voluptate voluptatem odio labore magnam
        aliquid magni incidunt maiores rerum at repellendus.
      </p>
      <br />
      <p style={paragraphStyle}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, alias exercitationem!
        Est, quisquam dolores fuga maxime fugiat exercitationem voluptate voluptatem odio labore
        magnam aliquid magni incidunt maiores rerum at repellendus.
      </p>
    </div>
  );
};

export default Home;
