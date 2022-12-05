import { HomeTitle } from 'components/Home/Home.styled';

const Home = () => {
  return (
    <main>
      <div>
        <HomeTitle>
          {' '}
          Сreate easily your contact book{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </HomeTitle>
      </div>
    </main>
  );
};
export default Home;
