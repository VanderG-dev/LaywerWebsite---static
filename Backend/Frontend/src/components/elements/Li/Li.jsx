function Li({ mainText, SubText, image, styles }) {
  return (
    <>
      <li className={styles.list}>
        <div className="flex flex-row  items-start">
          <img src={image} alt={image} className=" mr-4 mt-3   sm:w-16 sm:h-16  w-10 h-10" />
          <div className="flex flex-col">
            <h3 className="font-bold">{mainText}</h3>
            <p className={styles.p}>{SubText}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Li;
