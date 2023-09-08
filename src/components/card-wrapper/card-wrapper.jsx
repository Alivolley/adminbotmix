function CardWrapper({ children }) {
  return (
    <div className="rounded-[15px] bg-bgSecondary p-5 text-textMain transition-colors duration-200 dark:bg-bgSecondaryDark dark:text-textMainDark">
      {children}
    </div>
  );
}

export default CardWrapper;
