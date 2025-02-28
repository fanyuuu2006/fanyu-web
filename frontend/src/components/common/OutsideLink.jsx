export default function OutsideLink({ href, children, ...props}){
    return(
        <a href={href} target="_blank" rel= "noopener noreferrer" {...props}>
            {children?? href}
        </a>
    );
}