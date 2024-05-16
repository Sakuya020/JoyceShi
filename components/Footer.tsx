const Footer = () => {
  return (
    <footer className="w-full">
      {/* footer for pc view */}
      <div className="hidden sm:block">
        <div className="h-8"></div>
        <div className="fixed bottom-0 flex items-center h-8 w-[calc(100vw-20px)] border-t border-foreground bg-background">
          <p>© Joyce Shi 2018-2024</p>
        </div>
      </div>
      {/* footer for phone view */}
      <div className="sm:hidden">
        <div className="h-[63px]"></div>
        <div className="fixed bottom-0 flex pt-[15px] h-16 w-[calc(100vw-32px)] bg-background border-t border-foreground">
          <p>© Joyce Shi 2018-2024</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
