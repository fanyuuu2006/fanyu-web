import "@/styles/FlexGrowDiv.css";

export default function FlexGrowDiv({
  DivClassName = "",
  TitleClassName = "",
  ContentClassName = "",
  TitleComponents,
  children,
}) {
  return (
    <div className={`FlexGrowDiv ${DivClassName}`}>
      {TitleComponents && (
        <p className={`FlexGrowDiv-Title ${TitleClassName}`}>
          {TitleComponents}
        </p>
      )}
      <div className={`FlexGrowDiv-Content ${ContentClassName}`}>
        {children}
      </div>
    </div>
  );
}
