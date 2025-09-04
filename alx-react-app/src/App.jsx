import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
      <UserProfile
	name="Ransford"
	age="25"
	bio="Loves hiking, designing and games"
      />
    </div>
  );
}

export default App;
