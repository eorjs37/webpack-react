interface MyButtonProps{
    title:string;
    disabled:boolean;
}

function MyButton({title,disabled}: MyButtonProps){
    return(
        <button disabled={disabled}>{title}</button>
    )
}

export default function App(){
    return(
        <div className="container">
            <h1>Welcome to my app11</h1>
            <MyButton title="I`m a button" disabled={false}/>
        </div>
    )
}