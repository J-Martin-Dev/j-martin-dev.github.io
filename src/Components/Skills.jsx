export const Skills = ({
  technicalLabel,
  programmingLabel,
  capacityLabel,
  languageLabel,
  technicalSkills,
  capacitySkills,
  programmingSkills,
  languageSkills,
}) => {
  return (
    <>
      <section className="technical-skills section" id="skills">
        <h2 className="section-title">{technicalLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {technicalSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
      <section className="programming-skills section">
        <h2 className="section-title">{programmingLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {programmingSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
      <section className="capacity-skills section">
        <h2 className="section-title">{capacityLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {capacitySkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
      <section className="languageSkills section">
        <h2 className="section-title">{languageLabel}</h2>
        <div className="skills__content bd-grid">
          <ul className="skills__data">
            {languageSkills.map((skill) => <Skill key={skill} skill={skill} />)}
          </ul>
        </div>
      </section>
    </>
  );
};

const Skill = ({ skill }) => (
  <li className="skills__name">
    <span className="skills__circle" /> {skill}
  </li>
);
