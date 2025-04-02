export default function Singer({singer}){
    const {sName,age}=singer
    return (
        <div>
            <h3>Name: {sName}</h3>
            <p>Age: {age}</p>
        </div>
    )
}