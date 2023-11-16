import React from 'react';
import clsx from 'clsx';
import ThemedImage from '@theme/ThemedImage';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        <div style={{ fontSize: '1.1em', textAlign: 'justify' }}>
        Welcome to CS 220!

        The goal of COMPSCI220 Programming Methodology is to turn you into an advanced programmer with a deep
        understanding of modern programming methodology. We will emphasize good software engineering skills, 
        including programming abstractions, testing, and debugging. Although the programming languages that we 
        will use are JavaScript and TypeScript, we will emphasize general programming principles. Every- thing 
        that you will learn in the class will be applicable to other modern languages, including (for example)
        C++, C#, D, Go, Java, Python, Rust, and Swift.
        </div>
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className="row">
      <div className={clsx('col col--4 text--center')}>
        <ThemedImage
          alt="220 image"
          sources={{
            light: useBaseUrl('img/220.jpg'),
            dark: useBaseUrl('img/220.jpg'),
          }}
        />
      </div>
      <div className={clsx('col col--8')}>
        <div className="">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

function FeatureOri({ Svg, title, description }) {
  return (
    <div className={clsx('col col--12')}>
      {/* <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div> */}
      <div className="text--center padding-horiz--md">
        {/* <h3>{title}</h3> */}
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}