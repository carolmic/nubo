type PageTitleProps = {
    title: string
  }
  
  const PageTitle = ({ title }: PageTitleProps) => {
    return (
      <h3 className="text-3xl font-bold text-(--color-blue-title)">
        {title}
      </h3>
    )
  }
  
  export default PageTitle