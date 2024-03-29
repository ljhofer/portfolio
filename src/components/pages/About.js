import headshot from '../../images/blurred.png'

// Styling for the HTML elements generated by this component
const styles = {
  h1: {
    textAlign: 'center',
    marginBottom: 20,
  },
  div: {
    textAlign: 'center',
  },
  p: {
    fontSize: 25,
    padding: 25,
    backgroundColor: '#bbccbd',
    margin: 20,
  },
};

// Generates the HTML to be displayed in the About section
export default function About() {
  return (
    <>
      <h1 style={styles.h1}>About Me</h1>
      <div style={styles.div}>
        <img id='head-shot' src={headshot} alt='Laura Hofer' />
        <p style={styles.p}>
        Full stack developer building on an education background to enhance user experience online. My objective for each project is to create an intuitive, streamlined experience. I am a lifelong learner, always following my curiousities through reading, travel, and educational opportunities.  I have years of experience as a teacher that have solidified my interpersonal skills, my ability to be adaptive and responsive, and keep the end user in mind.
        </p>
      </div>
    </>
  );
}
