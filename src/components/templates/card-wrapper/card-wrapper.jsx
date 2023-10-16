function CardWrapper({ children, heightFull = false, className = '' }) {
   return (
      <div
         className={`rounded-[15px] bg-bgSecondary p-5 text-textMain transition-colors duration-200 dark:text-textMainDark ${className} ${
            heightFull ? 'h-full' : ''
         }`}
      >
         {children}
      </div>
   );
}

export default CardWrapper;
