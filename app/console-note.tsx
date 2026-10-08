'use client';
import { useEffect, useRef } from 'react';
export default function ConsoleNote() {
  const logged = useRef(false);
  useEffect(() => {
    if (logged.current) return;
    logged.current = true;
    console.log('Looking under the hood. Respect.\nnrhuyck@gmail.com');
  }, []);
  return null;
}
