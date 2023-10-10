function CardWrapper({ children, heightFull = false }) {
   return (
      <div
         className={`rounded-[15px] bg-bgSecondary p-5 text-textMain transition-colors duration-200 dark:text-textMainDark ${
            heightFull ? 'h-full' : ''
         }`}
      >
         {children}
      </div>
   );
}

export default CardWrapper;
