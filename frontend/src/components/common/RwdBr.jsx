import "@/styles/RwdBr.css";
export default function RwdBr({ className, ...props }) {
  return <br className={`RwdBr ${className || ""}`} {...props} />;
}
