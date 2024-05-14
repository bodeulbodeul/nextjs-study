"use client";
import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ name, label }) {
  const [prevImage, setPrevImage] = useState();
  const imageInputRef = useRef();

  const handlePickClick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      setPrevImage(fileReader.result);
    };
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {prevImage ? <Image src={prevImage} alt="preview image" fill /> : <p>No image picked yet</p>}
        </div>
        <input
          ref={imageInputRef}
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
        />
        <button className={styles.button} type="button" onClick={handlePickClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}
