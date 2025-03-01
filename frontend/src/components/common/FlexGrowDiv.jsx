import "@/styles/FlexGrowDiv.css";

export default function FlexGrowDiv({
  className = "",
  TitleComponents,
  children,
}) {
  return (
    <div className={`FlexGrowDiv ${className}`}>
      {TitleComponents ?? (
        <p className="FlexGrowDiv-Title">{TitleComponents}</p>
      )}
      <div className="FlexGrowDiv-Content">{children}</div>
    </div>
  );
}
