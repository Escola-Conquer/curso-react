function Computer(props) {
    return <h3>Eu tenho um PC {props.brand.model} !</h3>;
}
 
function Workspace() {
    const pcInfo = {name: "Dell", model: "Vostro"}
    return (
        <>
            <h2>O que eu tenho no meu workspace?</h2>
            <Computer brand={pcInfo} />
        </>
    );
}
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Workspace/>);
