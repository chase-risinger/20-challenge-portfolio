import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
      <div className="my-2">
        <p>
          Chase Risinger, alias Johnny Dioxide, has been playing guitar and writing songs since he was 13
          (a catalogue that includes 98.9 KUTX’s Song of the Day, “Red Turtle”). In 2013, Risinger packed up his truck and tried his luck in Austin, Texas,
          with the desire to be among his own kind. Once there,
          he quickly fell in with the local musicians, playing in a number of bands, eventually founding the Pendulum Hearts in 2018.
          And now, he has embarked upon a new journey in order to fill up his daytime hours, he is learning how to code!
        </p>
      </div>
    </section>
  );
}

export default About;
