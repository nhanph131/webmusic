const Container = (props) =>{
    return (
        <div style={{ maxWidth: "80%", margin: "0 auto", padding: "0 16px" }}>
            {props.children}
        </div>
    );
}
export default Container;