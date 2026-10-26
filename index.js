const root= ReactDOM.createRoot(document.getElementById('root'));
const ChildComponent=(props)=> {
    return (<div>
        <h1>Helloo, {props.name}!</h1>
    </div>)
}
const ParentComponent=()=> {
    const user={{
        name:'abc',
        email: 'abc@example.com',
        section: 'A',  
        
        

    }}