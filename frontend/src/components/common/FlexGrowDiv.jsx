import "@/styles/FlexGrowDiv.css";

export default function FlexGrowDiv({ TitleComponents, children}) {
  return (
    <div className="FlexGrowDiv">
      <p className="FlexGrowDiv-Title">{TitleComponents}</p>
      <div className="FlexGrowDiv-Content">{children}</div>
    </div>
  );
}
