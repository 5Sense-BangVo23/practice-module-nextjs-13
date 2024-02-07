
'use client';

import Image from "next/image";
import style from "./page.module.css";

import Link from 'next/link'
import x from '@/styles/app.module.css';
import y from '@/styles/demo.module.css';
import AppTable from "@/components/app.table";
import { useEffect } from "react";
import useSWR from "swr";

export default function Home() {

  
  
  const urlAPI = 'http://127.0.0.1:5000/api/data';

  const fetcher = (url: string) =>
                  fetch(url)
                    .then((res) => res.json())
                    .then((data) => {
                      console.log('Fetcher Data:', data);
                      return data;
                    });



  const { data, error, isLoading } = useSWR(
                                              urlAPI, 
                                              fetcher,
                                              {
                                                revalidateIfStale:false,
                                                revalidateOnFocus:false,
                                                revalidateOnReconnect:false,
                                              }
                                            );


  console.log("Data:", data);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(urlAPI, {
  //         method: 'GET',
  //         headers: {
  //           'Content-Type': 'application/json', 
  //         },
  //       });
    
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
    
  //       const data = await response.json();
  //       console.log("Data:", data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
    
    
  
  //   fetchData();
  // }, []);
  
  return (
    <div >
      <div>{data?.length}</div>
      <div>
        <h1>Welcome to my app</h1>
      </div>

      <ul>
        <li className={x["red"]}>
          <Link href={"/home"}>
            <span className={y["red"]}>Home</span>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/gallary"}>Gallary</Link>
        </li>
      </ul>
      <AppTable />
    </div>
  );
}
 