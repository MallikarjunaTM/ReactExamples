const NameTag = props =>{
    if(props.FirstName===null){
        return null;
    }
    return (
        <div className='name'>
        <h3 style={props.style}>{props.FirstName}</h3>
        <h3 style={props.style}>{props.LastName}</h3>
        {props.FirstName==='Jhon'?<h1 style={{color:'red'}}>VIP</h1>:null}
    </div>)
}
export default NameTag;