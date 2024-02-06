import Image from "next/image";
import style from "./page.module.css";

import Link from 'next/link'
import x from '@/styles/app.module.css';
import y from '@/styles/demo.module.css';

export default function Home() {
  return (
    <div>
         <div>
      <h1>
        Welcome to my app
      </h1>
    </div>
   
      <ul>
        <li className={x['red']}>
            <Link href={'/home'}>
                <span className={y['red']}>Home</span>
            </Link>
        </li>
        <li>
            <Link href={'/contact'}>
              Contact
            </Link>
        </li>
        <li>
            <Link href={'/gallary'}>Gallary</Link>
        </li>
      </ul>
    </div>
  );
}
 