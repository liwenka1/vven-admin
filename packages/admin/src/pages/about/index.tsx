const About = () => {
  const { VITE_TITLE, VITE_NAME } = import.meta.env

  return <div>{VITE_TITLE + VITE_NAME}</div>
}

export default About
