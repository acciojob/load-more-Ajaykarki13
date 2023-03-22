const Load = (props) =>
{
function handleClick()
{
<ul>
    {props.item.map((t)=>{
    <li>{t}</li>})}
</ul>

}
    return(
<button onClick={handleClick}>Load More</button>

    )

}
export default Load