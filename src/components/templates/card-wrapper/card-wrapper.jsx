function CardWrapper({ children }) {
  return (
    <div className="rounded-[15px] bg-bgPrimary p-5 text-textMain transition-colors duration-200 dark:bg-bgPrimaryDark dark:text-textMainDark">
      {children}
    </div>
  );
}

export default CardWrapper;
