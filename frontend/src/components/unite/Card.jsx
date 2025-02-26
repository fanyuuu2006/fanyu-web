import "@/styles/Card.css";

function Card({className, ...props}){
    return(
        <div
        className="Card"
        {...props}
        />
    );
}

export {Card};