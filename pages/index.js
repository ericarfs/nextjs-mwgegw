import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Menu } from '../components/layout.js';

export default function Home() {
  return (
    <>
      <h1>Hello World</h1>;
      <Menu />
    </>
  );
}
