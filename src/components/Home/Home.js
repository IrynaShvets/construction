import SectionHero from './SectionHero';
import SectionPreference from './SectionPreference';
import SectionProject from './SectionProject/SectionProject';
import SectionStructure from './SectionStructure';
import SectionAboutCompany from './SectionAboutCompany/SectionAboutCompany';
import styles from './Home.module.scss';
import SectionTypesConstruction from './SectionTypesConstruction';

function Home() {
  return (
    <>
      <SectionHero />
      <SectionPreference />
      <SectionProject />
      <SectionStructure />
      <SectionAboutCompany />
      <SectionTypesConstruction />
    </>
  );
}

export default Home;
