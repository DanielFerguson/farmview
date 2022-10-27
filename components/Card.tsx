const Card = ({ children, className }) => {
    return (
        <div className={["border rounded-lg shadow-sm", className].join(" ")}>
            {children}
        </div>
    )
}

export default Card;